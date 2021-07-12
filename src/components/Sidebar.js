import React from "react"
import Links from "../constants/links"
import {
  sidebar,
  showSidebar,
  closeBtn,
  sidebarLinks
} from "../css/sidebar.module.scss"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // 
  return (
    <aside className={`${sidebar} ${isOpen ? showSidebar : ''}`}>
      <button className={closeBtn} onClick={toggleSidebar}>
        ba<br></br>ck
      </button>
      <div className={`${isOpen ? sidebarLinks : ""}`} onClick={toggleSidebar} role="Navigation">
        <Links />
      </div>
    </aside>
  )
}

export default Sidebar