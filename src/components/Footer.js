import React from 'react'
import logo from '../assets/logo.svg'
const Footer = () => {
	return (
		<>
			<div className='spikes'></div>
			<footer >

				<img src={logo} alt="logo" />
				<p>copyright &copy; {new Date().getFullYear()} <span>Habinski</span></p>
				<p> all rights reserved</p>

			</footer>
		</>
	)
}

export default Footer