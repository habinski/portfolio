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
        id: article.node.strapiId,
      },
    })
  })

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.url}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })
}