import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChannelId, setChannelInfo } from "./features/appSlice";
import "./features/SidebarChannel.css";

export const SidebarChannel = ({ channel, id}) => {
  const dispatch = useDispatch();
  const channelId = useSelector(selectChannelId);
  let channelSelected = 'sidebarChannel'
  channelSelected += id === channelId ? ' sidebarChannel__selected' : '';
  
  return (
    <div
      className={channelSelected}
      onClick={() =>
        dispatch(setChannelInfo({ channelId: id, channelName: channel }))
      }
    >
      <h4 className={channelSelected}>
        <span className="sidebarChannel__hash">#</span>
        {channel}
      </h4>
    </div>
  );
};
