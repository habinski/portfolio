import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/#projects",
  },
  {
    id: 3,
    text: "blog",
    url: "/blog",
  },
  {
    id: 4,
    text: "contact",
    url: "/#contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <Link activeClassName='activeLink' key={link.id} to={link.url}>{link.text}</Link>
  )
})


export default () => {
  return (
    <>
      {tempLinks}
    </>
  )
}
