import React from 'react'
import "./SidebarOptions.css"

// functions take 3 parameters and sets the home button to active status:must use back quotes
function SidebarOptions({ active, text, Icon }) {
    return (
        <div className = {`sidebarOptions ${active && "sidebarOptions--active"}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
