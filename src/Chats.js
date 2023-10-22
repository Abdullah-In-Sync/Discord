import React, { useEffect, useState } from "react";
import { ChatsHeader } from "./ChatsHeader";
import "./features/Chat.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Messages } from "./Messages";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import db from "./firebase";

function Chats() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  let path = "channels";
  if (channelId) path =  `channels/${channelId}/messages`;
  let subRef = collection(db, path);
  const q = query(subRef, orderBy("timestamp", "desc"));
  
  useEffect(() => {
    if (channelId) {
      onSnapshot(q, (docs) => {
        const channelsMessages = [];
        docs.forEach((doc) => {
          channelsMessages.push(doc.data());
          setMessages(channelsMessages);
        });
      });
    }
    setMessages([]);
    }, [channelId]);
    
    const sendMessage = async (e) => {
      e.preventDefault();
    await addDoc(subRef, {
      message: input,
      timestamp: serverTimestamp(),
      user: user,
    })
    // setMessages([]);
    setInput("");
  };

  return (
    <div className="chats" id="chats__el">
      <ChatsHeader channelName={channelName || ""} />
      <div className="chats__messages">
        {messages.map((message, i) => (
          <Messages
            key={message.timestamp + i}
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className="chats__input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input
            className="message_input"
            value ={input}
            type="text"
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`${channelName ? channelName : "Please Select A Channel"}`}
          />
          <button
            onClick={sendMessage}
            className="chats__inputButton"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="chats__inputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chats;
