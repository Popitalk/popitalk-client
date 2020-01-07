import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useOnClickOutside from "use-onclickoutside";
import {
  sendFriendRequest,
  rejectFriendRequest,
  blockUser,
  unblockUser
} from "../../redux/actions";
import "./FriendBlockMenu.css";

export default function FriendBlockMenu({ type }) {
  const { userId } = useParams();
  const { userId: modalUserId } = useSelector(state => state.modalState);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  const handleRejectFriendRequest = () => {
    dispatch(rejectFriendRequest(userId || modalUserId));
    setOpen(false);
  };

  const handleBlock = () => {
    dispatch(blockUser(userId || modalUserId));
    setOpen(false);
  };

  const handleUnblock = () => {
    dispatch(unblockUser(userId || modalUserId));
    setOpen(false);
  };

  return (
    <div
      className={`FriendBlockMenu--container${
        open ? " FriendBlockMenu--open" : ""
      }`}
    >
      <i
        className="fas fa-ellipsis-v fa-lg"
        role="button"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="FriendBlockMenu--popup" ref={ref}>
          {type === "friend" ? (
            <>
              <p onClick={handleRejectFriendRequest}>Unfriend</p>
              <p onClick={handleBlock}>Block</p>
            </>
          ) : type === "sent request" ? (
            <>
              <p onClick={handleRejectFriendRequest}>Cancel request</p>
              <p onClick={handleBlock}>Block</p>
            </>
          ) : type === "received request" ? (
            <>
              <p onClick={handleRejectFriendRequest}>Reject request</p>
              <p onClick={handleBlock}>Block</p>
            </>
          ) : type === "blocked" ? (
            <>
              <p onClick={handleUnblock}>Unblock</p>
            </>
          ) : (
            <>
              <p onClick={handleBlock}>Block</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
