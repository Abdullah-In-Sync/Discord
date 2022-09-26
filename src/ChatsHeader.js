import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import "./features/ChatsHeader.css"
export const ChatsHeader = ({channelName}) => {
  return (
    <div className="chatsHeader">
      <div className="chatsHeader__left">
            <h3>
            <span className="chatsHeader__hash">#</span>
            {channelName}
            </h3>
      </div>
      <div className="chatsHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatsHeader__search">
          <input type="text" placeholder='search' />
          <SearchRoundedIcon />  
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
    
  )
}
