import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import "./features/Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1>Discord</h1>
      <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
      <ExpandMoreIcon />
      <h4>Text Channels</h4>
      <AddIcon/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar