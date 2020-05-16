import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";
import ChannelComment from "./ChannelComment";
import NewChannelComment from "./NewChannelComment";

export default function ChannelPost({
  id,
  name,
  avatar,
  timeFromPost,
  text,
  comments,
  liked,
  setLiked,
  likes,
  setLikes,
  handleLike = null
}) {
  const [showNewComment, setShowNewComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleComment = () => {
    setShowNewComment(!showNewComment);
  };

  return (
    <>
      <div className="flex flex-col rounded-lg shadow px-8 py-3 bg-primaryBackground my-2">
        <header className="flex">
          <AvatarIcon avatar={avatar} username={name} />
          <div className="flex flex-col pl-3">
            <span>{name}</span>
            <span className="text-secondaryText text-sm">{timeFromPost}</span>
          </div>
        </header>
        <p className="text-sm py-3">{text}</p>
        <footer className="flex text-secondaryText text-2xl">
          <button className="flex align-middle" onClick={handleLike}>
            <FontAwesomeIcon icon={["far", "heart"]} />
            <span className="text-sm font-bold ml-1">Like</span>
          </button>
          <button className="flex align-middle ml-12" onClick={handleComment}>
            <FontAwesomeIcon icon={["far", "comment"]} />
            <span className="text-sm font-bold ml-1">Comment</span>
          </button>
        </footer>
      </div>
      {comments && (
        <div className="ml-6">
          {!showComments && (
            <button
              className="text-secondaryText text-sm"
              onClick={() => setShowComments(!showComments)}
            >
              View more comments
            </button>
          )}
          {showComments && (
            <button
              className="text-secondaryText text-sm"
              onClick={() => setShowComments(!showComments)}
            >
              Hide comments
            </button>
          )}
          {comments.map((comment, idx) => {
            if (!showComments && idx === comments.length - 1) {
              return <ChannelComment key={idx} {...comment} />;
            }
            if (showComments) {
              return <ChannelComment key={idx} {...comment} />;
            }
          })}
          {showNewComment && <NewChannelComment />}
        </div>
      )}
    </>
  );
}
