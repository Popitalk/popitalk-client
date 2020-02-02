import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useOnClickOutside from "use-onclickoutside";
import { updateMember } from "../../redux/actions";
import "./PopupMenu.css";

const Spinner = () => (
  <div className="PopupMenu--spinner">
    <div className="PopupMenu--spinner--circle" />
  </div>
);

export default function PopupMenu({ type, userId, disabled, loading }) {
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
    dispatch(updateMember(channelId, userId, "admin"));
    setOpen(false);
  };

  const handleUnadmin = () => {
    dispatch(updateMember(channelId, userId, "unadmin"));
    setOpen(false);
  };

  const handleBan = () => {
    dispatch(updateMember(channelId, userId, "ban"));
    setOpen(false);
  };

  const handleUnban = () => {
    dispatch(updateMember(channelId, userId, "unban"));
    setOpen(false);
  };

  let menu;

  if (type === "members") {
    menu = (
      <>
        <p onClick={handleAdmin}>Admin</p>
        <p onClick={handleBan}>Ban</p>
      </>
    );
  } else if (type === "admins") {
    menu = (
      <>
        <p onClick={handleUnadmin}>Unadmin</p>
        <p onClick={handleBan}>Ban</p>
      </>
    );
  } else if (type === "banned") {
    menu = (
      <>
        <p onClick={handleUnban}>Unban</p>
      </>
    );
  }

  return (
    <div
      className={`PopupMenu--container${open ? " PopupMenu--open" : ""}`}
      role="button"
      onMouseDown={disabled ? undefined : () => setOpen(true)}
    >
      {loading ? <Spinner /> : <i className="fas fa-ellipsis-v fa-lg" />}
      {open && (
        <div className="PopupMenu--popup" ref={ref}>
          {menu}
        </div>
      )}
    </div>
  );
}
