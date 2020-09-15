import React from "react"
import Links from "../constants/links"
// import SocialLinks from "../constants/socialLinks"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        ba<br></br>ck
      </button>

      <div className={`${isOpen ? "sidebar-links" : ""}`} >
        <Links onClick={toggleSidebar} />
        {/* <SocialLinks styleClass={`${isOpen ? "sidebar-links" : ""}`} /> */}

      </div>
    </aside>
  )
}

export default Sidebar