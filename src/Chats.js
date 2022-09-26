import React from 'react'
import { ChatsHeader } from './ChatsHeader'
import "./features/Chat.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Messages } from './Messages';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';




function Chats() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  return (
    <div className="chats">
      <ChatsHeader channelName={channelName} />
      <div className="chats__messages">
        <Messages />
        <Messages />
        <Messages />
      </div>
      <div className="chats__input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input type="text" placeholder='{Message #MyChannel}' />
          <button className='chats__inputButton' type='submit'> Send Message</button>
        </form>
        <div className="chats__inputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
    
  )
}

export default Chats