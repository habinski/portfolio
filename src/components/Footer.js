import React from 'react'
import logo from '../assets/logo.svg'
import PageLinks from "../constants/links"
import { Link } from "gatsby"

const activeLink = {
	background: "linear-gradient(90deg, #7700BB 0%, #0090FF 100%)",
	WebkitBackgroundClip: "text",
	color: "transparent"
}

const Footer = () => {
	return (
		<>
			<div className='spikes'></div>
			<footer >

				<img src={logo} alt="logo" className='footer-logo' />
				<div className="navigation">
					<PageLinks styleClass="nav-links"></PageLinks>
					<Link activeClassName='activeLink' to='/privacy'>privacy policy</Link>
				</div>
				<div className="copyright">
					<p>copyright &copy; {new Date().getFullYear()} <span>Habinski</span></p>
					<p>all rights reserved</p>
				</div>

			</footer>
		</>
	)
}

export default Footer