exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }

    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    // const langCode = page.path.split(`/`)[1]
    // page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}
//pageContext 
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
    {
      articles: allStrapiArticle(sort: {order: DESC, fields: published_at}) {
        edges {
          node {
            title
            url
            id
            content
            published_at(formatString: "DD MMMM YYYY")
            updated_at(formatString: "DD MMMM YYYY")
            categories {
              id
              name
              url
            }
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          next {
            url
            categories {
              id
              name
            }
            updated_at(formatString: "DD MMMM YYYY")
            title
            strapiId
          }
          previous {
            url
            categories {
              id
              name
            }
            updated_at(formatString: "DD MMMM YYYY")
            title
            strapiId
          }
        }
      }
      categories: allStrapiCategory(sort: {order: DESC, fields: published_at}) {
        edges {
          node {
            name
            url
            strapiId
            articles {
              title
              url
              id
              content
              published_at(formatString: "DD MMMM YYYY")
              updated_at(formatString: "DD MMMM YYYY")
              cover {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
    
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges

  articles.forEach((article, index) => {
    createPage({
      path: `/blog/${article.node.url}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        article: article
      },
    })
  })

  categories.forEach((category, index) => {
    createPage({
      path: `/blog/${category.node.url}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        category: category,
      },
    })
  })
}