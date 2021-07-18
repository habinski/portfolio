import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
  categoriesNavigation,
  blogLinks
} from '../../css/blog/categoriesNav.module.scss'

const query = graphql`
{
  allStrapiCategory {
    edges {
      node {
        strapiId
        name
        url
      }
    }
  }
}
`

const CategoriesNav = () => {
  const data = useStaticQuery(query)
  const categories = data.allStrapiCategory.edges.map(category => {
    return (
      <Link activeClassName='activeLink' key={category.node.strapiId} to={`/blog/${category.node.url}`}>
        {category.node.name}
      </Link>
    )
  })
  return (<div className={categoriesNavigation}>
    <div className={blogLinks}>
      {categories}
      <Link activeClassName='activeLink' to={`/blog`}>all articles
      </Link>
    </div>
  </div>)
}



export default CategoriesNav