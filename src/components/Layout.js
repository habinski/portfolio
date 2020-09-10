import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
// import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout =
	({ children }) => {
		const [isOpen, setIsOpen] = React.useState(false)
		const toggleSidebar = () => {
			setIsOpen(!isOpen)
		}

		return (
			<>
				<header>	<Navbar toggleSidebar={toggleSidebar} /></header>
				{/* <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
				<main>
					{children}
				</main>
				<Footer />
			</>
		)
	}

export default Layout
