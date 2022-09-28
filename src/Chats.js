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
  const [messeges, setMessages] = useState([]);
  console.log("channelId", channelId);
  let collRef = collection(db, "channels");
  const q = query(collRef, orderBy("timeStamp","desc"));
  useEffect(() => {
    if (channelId) {
      onSnapshot(q, (docs) => {
        setMessages(docs.data());
        console.log("data", messeges);
      });
    }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    addDoc(collRef, {
      timestamp: serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };
  return (
    <div className="chats">
      <ChatsHeader channelName={channelName} />
      <div className="chats__messages">
        {messeges.map((message) => (
          <Messages
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
            type="text"
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message # ${channelName}`}
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
