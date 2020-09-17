import { Link } from "gatsby"

import React from "react"
import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
	return (
		<nav className="navbar">
			<Link to='/' className='header-logo'><img src={logo} alt="logo" /></Link>
			<div className="line-nav">

				<PageLinks styleClass="nav-links"></PageLinks>

			</div>
			<button type="button" className="burger-btn" onClick={toggleSidebar}>
				ME<br></br>NU
				</button>
		</nav >
	)
}

export default Navbar