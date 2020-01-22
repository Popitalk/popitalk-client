import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useOnClickOutside from "use-onclickoutside";
import { leaveRoom } from "../../redux/actions";
import "./RoomMenu.css";

export default function RoomMenu() {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  const handleRoomLeave = () => {
    dispatch(leaveRoom(channelId));
    setOpen(false);
  };

  return (
    <div
      className={`RoomMenu--container${open ? " RoomMenu--open" : ""}`}
      role="button"
      onMouseDown={() => setOpen(true)}
    >
      <i className="fas fa-ellipsis-v fa-lg" />
      {open && (
        <div className="RoomMenu--popup" ref={ref}>
          <p onClick={handleRoomLeave}>Leave</p>
        </div>
      )}
    </div>
  );
}
