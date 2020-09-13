// import React from "react"
// import logo from "../assets/logo.svg"
// // import { FaAlignRight } from "react-icons/fa"
// import PageLinks from "../constants/links"
// const Navbar = ({ toggleSidebar }) => {
// 	return (
// 		<nav className="navbar">
// 			<img src={logo} alt="logo" />

// 			{/* <button type="button" className="toggle-btn" onClick={toggleSidebar}>
// 					<FaAlignRight></FaAlignRight>
// 				</button> */}
// 			<div className="line-nav">
// 				<PageLinks />
// 			</div>
// 		</nav>
// 	)
// }

// export default Navbar


import React from "react"
import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
	return (
		<nav className="navbar">
			<img src={logo} alt="logo" />
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