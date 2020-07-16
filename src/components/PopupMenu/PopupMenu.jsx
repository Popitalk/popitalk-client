import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useOnClickOutside from "use-onclickoutside";
// import { updateMember } from "../../redux/actions";
import {
  rejectFriendRequest,
  cancelFriendRequest,
  deleteFriend,
  blockUser,
  unblockUser,
  addBan,
  deleteBan,
  addAdmin,
  deleteAdmin,
  deletePost,
  openDeleteMessageModal
} from "../../redux/actions";
import "./PopupMenu.css";

const Spinner = () => (
  <div className="PopupMenu--spinner">
    <div className="PopupMenu--spinner--circle" />
  </div>
);

export default function PopupMenu({
  type,
  userId,
  postId,
  messageId,
  disabled,
  loading
}) {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  const handleMessageDelete = () => {
    dispatch(openDeleteMessageModal({ channelId, messageId }));
    setOpen(false);
  };

  const handleCancelFriendRequest = () => {
    dispatch(cancelFriendRequest(userId));
    setOpen(false);
  };

  const handleRejectFriendRequest = () => {
    dispatch(rejectFriendRequest(userId));
    setOpen(false);
  };

  const handleUnfriend = () => {
    dispatch(deleteFriend(userId));
    setOpen(false);
  };

  const handleBlock = () => {
    dispatch(blockUser(userId));
    setOpen(false);
  };
  const handleUnblock = () => {
    dispatch(unblockUser(userId));
    setOpen(false);
  };

  const handleAdmin = () => {
    dispatch(addAdmin({ channelId, userId }));
    setOpen(false);
  };

  const handleUnadmin = () => {
    dispatch(deleteAdmin({ channelId, userId }));
    setOpen(false);
  };

  const handleBan = () => {
    dispatch(addBan({ channelId, userId }));
    setOpen(false);
  };

  const handleUnban = () => {
    dispatch(deleteBan({ channelId, userId }));
    setOpen(false);
  };

  const handleDeletePost = () => {
    dispatch(deletePost({ postId }));
    setOpen(false);
  };

  let menu;

  if (type === "friend") {
    menu = (
      <>
        <p onClick={handleUnfriend}>Unfriend</p>
        <p onClick={handleBlock}>Block</p>
      </>
    );
  } else if (type === "sentRequest") {
    menu = (
      <>
        <p onClick={handleCancelFriendRequest}>Cancel request</p>
        <p onClick={handleBlock}>Block</p>
      </>
    );
  } else if (type === "receivedRequest") {
    menu = (
      <>
        <p onClick={handleRejectFriendRequest}>Reject request</p>
        <p onClick={handleBlock}>Block</p>
      </>
    );
  } else if (type === "blocked") {
    menu = (
      <>
        <p onClick={handleUnblock}>Unblock</p>
      </>
    );
  } else if (type === "unrelated") {
    menu = (
      <>
        <p onClick={handleBlock}>Block</p>
      </>
    );
  } else if (type === "members") {
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
  } else if (type === "post") {
    menu = (
      <>
        <p onClick={handleDeletePost}>Delete</p>
      </>
    );
  } else if (type === "message") {
    menu = (
      <>
        <p onClick={handleMessageDelete}>Delete</p>
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
