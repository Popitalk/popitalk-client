import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useOnClickOutside from "use-onclickoutside";
import { leaveRoom } from "../../redux/actions";
import "./ChannelSettingsMenu.css";

export default function ChannelSettingsMenu({ type, userId }) {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  const handleAdmin = () => {
    console.log("ADMIN");
    // dispatch(leaveRoom(channelId));
    setOpen(false);
  };

  const handleUnadmin = () => {
    console.log("UNADMIN");
    // dispatch(leaveRoom(channelId));
    setOpen(false);
  };

  const handleBan = () => {
    console.log("BAN");
    // dispatch(leaveRoom(channelId));
    setOpen(false);
  };

  const handleUnban = () => {
    console.log("UNBAN");
    // dispatch(leaveRoom(channelId));
    setOpen(false);
  };

  return (
    <div
      className={`ChannelSettingsMenu--container${
        open ? " ChannelSettingsMenu--open" : ""
      }`}
      role="button"
      onMouseDown={() => setOpen(true)}
    >
      <i className="fas fa-ellipsis-v fa-lg" />
      {open && (
        <div className="ChannelSettingsMenu--popup" ref={ref}>
          {type === "admin" ? (
            <>
              <p onClick={handleUnadmin}>Unadmin</p>
              <p onClick={handleBan}>Ban</p>
            </>
          ) : type === "banned" ? (
            <>
              <p onClick={handleUnban}>Unban</p>
            </>
          ) : (
            <>
              <p onClick={handleAdmin}>Admin</p>
              <p onClick={handleBan}>Ban</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
