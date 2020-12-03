import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import CookiesBanner from "./CookiesBanner"
import Footer from "./Footer"
const Layout = ({ children, title }) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Navbar toggleSidebar={toggleSidebar} title={title} />
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<main>{children}
				<CookiesBanner />
			</main>
			<Footer />
		</>
	)
}

export default Layout