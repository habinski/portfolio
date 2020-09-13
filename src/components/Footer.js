import React from 'react'
import logo from '../assets/logo.svg'
import PageLinks from "../constants/links"
import { Link } from "gatsby"
const Footer = () => {
	return (
		<>
			<div className='spikes'></div>
			<footer >

				<img src={logo} alt="logo" className='footer-logo' />
				<div className="navigation">
					<PageLinks styleClass="nav-links"></PageLinks>
					<Link to='/privacy'>privacy policy</Link>
				</div>
				<div className="copyright">
					<p>copyright &copy; {new Date().getFullYear()} <span>Habinski</span></p>
					<p> all rights reserved</p>
				</div>

			</footer>
		</>
	)
}

export default Footer