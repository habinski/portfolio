import { Link } from "gatsby"
import React from "react"
import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"

import {
	navbar,
	lineNav,
	headerLogo,
	navLinks,
	burgerMenu,
	burgerBtn
} from '../css/header.module.scss'

const Navbar = ({ toggleSidebar, title }) => {
	return (
		<nav className={navbar}>

			<div className={lineNav}>
				<Link to='/' className={headerLogo}><img src={logo} alt="logo" />{title}</Link>
				<div className={navLinks}>
					<PageLinks />
				</div>
			</div>
			<div className={burgerMenu} >
				<Link to='/' className={headerLogo}><img src={logo} alt="logo" />{title}</Link>
				<button type="button" className={burgerBtn} onClick={toggleSidebar}>
					ME<br></br>NU
				</button>
			</div>
		</nav >
	)
}

export default Navbar