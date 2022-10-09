import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import DeleteIcon from "@mui/icons-material/Delete";
import "./features/ChatsHeader.css"
import { useDispatch, useSelector } from 'react-redux';
import { selectChannelId, setChannelInfo } from './features/appSlice';
import db from './firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export const ChatsHeader = ({channelName}) => {
  const dispatch = useDispatch();
  const channelId = useSelector(selectChannelId);
    const deleteChannel = async () => {   
    if (window.confirm("Do you want to delete this channel") === true) {
      if(channelId) {
        let docRef = doc(db, "channels", channelId);
        await deleteDoc(docRef);
      }
      dispatch(setChannelInfo({ channelId: "", channelName: "" }))
    }
  };
  return (
    <div className="chatsHeader">
      <div className="chatsHeader__left">
            <h3>
            <span className="chatsHeader__hash">#</span>
            {channelName}
            </h3>
      </div>
      <div className="chatsHeader__right">
      <DeleteIcon onClick={deleteChannel} className="sidebarChannel__delete" />
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
