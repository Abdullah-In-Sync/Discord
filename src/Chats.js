import React from 'react'
import { ChatsHeader } from './ChatsHeader'
import "./features/Chat.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Chats() {
  return (
    <div className="chats">
      <ChatsHeader />
      <div className="chats__messages">

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