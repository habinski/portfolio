import { Link } from "gatsby"
import React from "react"
import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"


const Navbar = ({ toggleSidebar, title }) => {
	return (
		<nav className="navbar">

			<div className="line-nav">
				<Link to='/' className='header-logo'><img src={logo} alt="logo" />{title}</Link>
				<div className="nav-links">
					<PageLinks />
				</div>
			</div>
			<div className="burger-menu" >
				<Link to='/' className='header-logo'><img src={logo} alt="logo" />{title}</Link>
				<button type="button" className="burger-btn" onClick={toggleSidebar}>
					ME<br></br>NU
				</button>
			</div>
		</nav >
	)
}

export default Navbar