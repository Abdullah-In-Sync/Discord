import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import "./features/Sidebar.css";
import { SidebarChannel } from "./SidebarChannel";
import { Avatar } from "@mui/material/";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
import db from "./firebase";
import { onSnapshot, collection, addDoc, getDocs } from "firebase/firestore";

function Sidebar() {
  const user = useSelector(selectUser);
  const collRef = collection(db, "channels");
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const getUser = async() =>{
      const data = await getDocs(collRef, "channels")
      console.log("data", data);
    }
    getUser();
    onSnapshot(collRef, (docs) => {
      const channelsItems = [];
      docs.forEach((doc) => {
        console.log("doc", doc.data());
        channelsItems.push({ id: doc.id, channel: doc.data()});
        setChannels(channelsItems);
        // console.log(channelsItems);
      });
    });
  }, []);

  const addChannelHandler = async () => {
    const channelName = prompt("Enter Channel Name");
    console.log(channelName)
      addDoc(collRef, {
        channel: channelName,
      });
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1>Discord</h1>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon
            onClick={addChannelHandler}
            className="sidebar__addChannel"
          />
        </div>
        <div className="sidebar__channelsList">
          {channels.map(({id, channel}) => (
            <SidebarChannel id={id} key={id} channel={channel.channel}/>
          ))}
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h4>Voice Connected</h4>
          <p>Stream</p>
        </div>
        <div className="sidebar__infoIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
