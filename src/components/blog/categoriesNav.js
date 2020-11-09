import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const CategoriesNav = () => (
  <div className='CategoriesNav'>
    <div className="blog-links">
      <Link to="/blog">All</Link>
      <StaticQuery
        query={graphql`
                 {
                  allStrapiCategory {
                    edges {
                      node {
                        strapiId
                        category
                      }
                    }
                  }
                }
              `}
        render={data =>
          data.allStrapiCategory.edges.map((category, i) => {
            return (

              <Link key={category.node.strapiId} to={`/category/${category.node.category}`}>
                #{category.node.category}
              </Link>

            )
          })
        }
      /></div>
  </div>

)

export default CategoriesNav