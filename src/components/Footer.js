import React from 'react'
import logo from '../assets/logo.svg'
import PageLinks from "../constants/links"
import { Link } from "gatsby"

import {
	spikes,
	footerLogo,
	navigation,
	navLinks,
	activeLink,
	copyright
} from '../css/footer.module.scss'

const Footer = () => {
	return (
		<>
			<div className={spikes}></div>
			<footer >

				<img src={logo} alt="logo" className={footerLogo} />
				<div className={navigation}>
					<PageLinks styleClass={navLinks}></PageLinks>
					<Link activeClassName={activeLink} to='/privacy'>privacy policy</Link>
				</div>
				<div className={copyright}>
					<p>copyright &copy; {new Date().getFullYear()} <span>Habinski</span></p>
					<p>all rights reserved</p>
				</div>

			</footer>
		</>
	)
}

export default Footer