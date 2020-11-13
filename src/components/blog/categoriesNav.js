import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const query = graphql`
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
`

const CategoriesNav = () => {
  const data = useStaticQuery(query)
  const categories = data.allStrapiCategory.edges.map(category => {
    return (
      <Link activeClassName='activeLink' key={category.node.strapiId} to={`/category/${category.node.category}`}>
        {category.node.category}
      </Link>
    )
  })
  return (<div className='CategoriesNav'>
    <div className="blog-links">
      {categories}
      <Link activeClassName='activeLink' to={`/blog`}>all articles
</Link>
    </div>
  </div>)
}



export default CategoriesNav