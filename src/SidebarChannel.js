import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChannelId, setChannelInfo } from "./features/appSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import "./features/SidebarChannel.css";
import { deleteDoc, doc } from "@firebase/firestore";
import db from "./firebase";

export const SidebarChannel = ({ channel, id }) => {
  const dispatch = useDispatch();
  const channelId = useSelector(selectChannelId);
  useEffect(() => {
 deleteChannel();
  }, [])
  const deleteChannel = async () => {
    if(channelId) {
      let docRef = doc(db, "channels", channelId);
      await deleteDoc(docRef);
    }
  };
  
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(setChannelInfo({ channelId: id, channelName: channel }))
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel}
      </h4>
      <DeleteIcon onClick={deleteChannel} className="sidebarChannel__delete" />
    </div>
  );
};
