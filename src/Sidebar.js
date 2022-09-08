import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import "./features/Sidebar.css";
import { SidebarChannel } from "./SidebarChannel";
import { Avatar } from "@mui/material/";

function Sidebar() {
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
          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
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
        <Avatar />
        <div>
          <h3>Mars</h3>
          <p>#abdullahraghib</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon/>
          <HeadsetIcon/>
          <SettingsIcon/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
