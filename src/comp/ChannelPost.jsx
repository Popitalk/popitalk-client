import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function ChannelPost({
  id,
  adminName,
  adminAvatar,
  timeFromPost,
  text,
  comments,
  setComments,
  handleLike = null,
  handleComment = null
}) {
  return (
    <div className="flex flex-col rounded-lg shadow px-8 py-3">
      <header className="flex">
        <AvatarIcon avatar={adminAvatar} username={adminName} />
        <div className="flex flex-col pl-3">
          <span>{adminName}</span>
          <span className="text-secondaryText text-xs">{timeFromPost}</span>
        </div>
      </header>
      <p className="text-sm py-3">{text}</p>
      <footer className="flex text-secondaryText text-2xl">
        <button className="flex align-middle" onClick={handleLike}>
          <FontAwesomeIcon icon={["far", "heart"]} />
          <span className="text-sm font-bold ml-1">Like</span>
        </button>
        <button className="flex align-middle pl-12" onClick={handleComment}>
          <FontAwesomeIcon icon={["far", "comment"]} />
          <span className="text-sm font-bold ml-1">Comment</span>
        </button>
      </footer>
    </div>
  );
}
