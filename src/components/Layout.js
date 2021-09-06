import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import CookiesBanner from "./CookiesBanner"
import Footer from "./Footer"

import { motion } from "framer-motion"

const Layout = ({ children, title }) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Navbar toggleSidebar={toggleSidebar} title={title} />
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<motion.main
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 200 }}
				transition={{
					type: "spring",
					mass: 0.35,
					stiffness: 75,
					duration: 0.3
				}}
			>{children}
				<CookiesBanner />
			</motion.main>
			<Footer />
		</>
	)
}

export default Layout