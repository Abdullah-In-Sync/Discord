import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./features/Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1>Mars</h1>
      </div>
      <ArrowDropDownIcon />
    </div>
  )
}

export default Sidebar