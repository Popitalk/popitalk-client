import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../VideoStatus.css";
import AvatarIcon from "../Controls/AvatarIcon";
import ChannelComment from "./ChannelComment";
import NewChannelComment from "./NewChannelComment";
import ToggleIcon from "../Controls/ToggleIcon";
import useOnClickOutside from "use-onclickoutside";
import PopupMenu from "../Controls/PopupMenu";
import { openProfileModal } from "../../redux/actions";
import { useDispatch } from "react-redux";
import moment from "moment";

export default function ChannelPost({
  id,
  name,
  avatar,
  timeFromPost,
  text,
  comments,
  liked,
  saveComment,
  defaultAvatar,
  toggleLike,
  likeCount,
  commentCount,
  ownId,
  authorId,
  removePost
}) {
  const [showNewComment, setShowNewComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const showNumComment = 2;
  const menuRef = useRef(null);
  // Opening profile modal
  const dispatch = useDispatch();

  const handleComment = () => {
    setShowNewComment(!showNewComment);
    console.log("clicked comment", showNewComment);
  };

  useOnClickOutside(menuRef, () => {
    if (showMenu) {
      setShowMenu(false);
    }
  });

  useEffect(() => {
    if (showComments) {
      setShowComments(true);
    }
  }, [showComments]);
  // console.log("comments in channelPost", comments, comments?.length);
  // console.log("ownId", ownId, "authorId", authorId);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col rounded-lg px-8 pt-4 mt-8 bg-primaryBackground shadow-sm hover:shadow-md cursor-pointer w-84 sm:w-102 lg:w-104">
        <div className="flex justify-between items-start w-full">
          <header
            className="flex items-center w-full space-x-2"
            onClick={() => dispatch(openProfileModal(authorId))}
            role="button"
          >
            <AvatarIcon
              avatar={avatar}
              username={name}
              className="img w-10 h-10 rounded-circle transition transform ease-in-out hover:scale-110 duration-100"
            />
            <div className="flex flex-col w-84">
              <span className="truncate">{name}</span>
              <span className="text-secondaryText text-xs">{timeFromPost}</span>
            </div>
          </header>
          <PopupMenu
            options={[{ name: "Delete", handler: () => removePost(id) }]}
            disabled={ownId !== authorId}
            className="-mr-3"
          />
        </div>
        <div
          className="text-primaryText text-lg py-4 px-2 break-words"
          onClick={handleComment}
          role="button"
        >
          {text}
        </div>
        {/* 0 Likes 0 Comments */}
        <section
          className="flex justify-start text-xs py-1 space-x-2 text-secondaryText"
          onClick={handleComment}
          role="button"
        >
          <span className="select-none hover:filter-brightness-9 duration-100">
            {likeCount} {likeCount > 1 ? "likes" : "like"}
          </span>
          <span className="select-none hover:filter-brightness-9 duration-100">
            {commentCount} {commentCount > 1 ? "comments" : "comment"}
          </span>
        </section>
        {/* Like and Comment buttons */}
        <footer className="flex text-secondaryText text-xl space-x-6 pb-2 items-center">
          <ToggleIcon
            icons={{ default: ["far", "heart"], toggle: ["fa", "heart"] }}
            colors={{
              default: "text-secondaryText",
              toggle: "text-notificationsColor"
            }}
            status={liked}
            toggleStatus={stat => toggleLike(id, "post", stat)}
            className="bg-highlightBackground"
          >
            Like
          </ToggleIcon>
          <button
            className="flex align-middle p-2 focus:outline-none hover:filter-brightness-9"
            onClick={handleComment}
          >
            <FontAwesomeIcon icon={["far", "comment"]} />
            <span className="text-sm font-bold ml-2">Comment</span>
          </button>
        </footer>
      </div>
      {/* Comment Section */}
      <div className="my-2 px-1 w-84 sm:w-102 lg:w-104 max-w-xl">
        {!showComments && comments?.length > showNumComment && (
          <button
            className="text-secondaryText text-xs px-2 focus:outline-none"
            onClick={() => setShowComments(!showComments)}
          >
            View more comments
          </button>
        )}
        {showComments && comments?.length > showNumComment && (
          <button
            className="text-secondaryText text-xs px-2 focus:outline-none"
            onClick={() => setShowComments(!showComments)}
          >
            Hide comments
          </button>
        )}

        {comments?.map((comment, idx) => {
          if (!showComments && idx >= comments.length - showNumComment) {
            return (
              <ChannelComment
                key={idx}
                id={comment.id}
                name={comment.author.username}
                authorId={comment.author.id}
                avatar={comment.author.avatar || defaultAvatar}
                timeFromPost={moment(comment.createdAt).fromNow()}
                text={comment.content}
                toggleLike={toggleLike}
                liked={comment.liked}
                likes={comment.likeCount}
              />
            );
          }
          if (showComments) {
            return (
              <ChannelComment
                key={idx}
                id={comment.id}
                name={comment.author.username}
                authorId={comment.author.id}
                avatar={comment.author.avatar || defaultAvatar}
                timeFromPost={moment(comment.createdAt).fromNow()}
                text={comment.content}
                toggleLike={toggleLike}
                liked={comment.liked}
                likes={comment.likeCount}
              />
            );
          }
        })}
        {showNewComment && (
          <NewChannelComment postId={id} saveComment={saveComment} />
        )}
      </div>
    </div>
  );
}
