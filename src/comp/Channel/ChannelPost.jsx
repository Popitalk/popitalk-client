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
      <div className="flex flex-col rounded-lg shadow px-8 py-4 bg-primaryBackground mt-8 hover:shadow-md cursor-pointer sm:w-102 md:w-102 lg:w-104 max-w-xl">
        <div className="flex justify-between relative">
          <header
            className="flex"
            onClick={() => dispatch(openProfileModal(authorId))}
            role="button"
          >
            <AvatarIcon
              avatar={avatar}
              username={name}
              className="img w-10 h-10 rounded-circle flex transition transform ease-in-out hover:scale-110 duration-100"
            />
            <div className="flex flex-col pl-2">
              <span>{name}</span>
              <span className="text-secondaryText text-xs pt-0">
                {timeFromPost}
              </span>
            </div>
          </header>
          <div className="h-10 w-8 pt-2">
            <PopupMenu
              options={[{ name: "Delete", handler: () => removePost(id) }]}
              disabled={ownId !== authorId}
            />
          </div>
        </div>
        <p
          className="text-primaryText text-lg pt-6 pb-5 px-2 break-words"
          onClick={handleComment}
          role="button"
        >
          {text}
        </p>
        <section
          className="flex justify-start text-xs pb-3 text-secondaryText"
          onClick={handleComment}
          role="button"
        >
          <span className="pr-3 select-none hover:filter-brightness-9 duration-100">
            {likeCount} {likeCount > 1 ? "likes" : "like"}
          </span>
          <span className="pr-3 select-none hover:filter-brightness-9 duration-100">
            {commentCount} {commentCount > 1 ? "comments" : "comment"}
          </span>
        </section>
        <footer className="flex text-secondaryText text-xl">
          <ToggleIcon
            icons={{ default: ["far", "heart"], toggle: ["fa", "heart"] }}
            colors={{
              default: "text-secondaryText",
              toggle: "text-notificationsColor"
            }}
            status={liked}
            toggleStatus={stat => toggleLike(id, "post", stat)}
          >
            Like
          </ToggleIcon>
          <button
            className="flex align-middle ml-12 focus:outline-none hover:filter-brightness-9"
            onClick={handleComment}
          >
            <FontAwesomeIcon icon={["far", "comment"]} />
            <span className="text-sm font-bold ml-2">Comment</span>
          </button>
        </footer>
      </div>
      <div className="ml-6 mt-2 sm:w-102 md:w-102 lg:w-104 max-w-xl">
        {!showComments && comments?.length > showNumComment && (
          <button
            className="text-secondaryText text-xs mb-2"
            onClick={() => setShowComments(!showComments)}
          >
            View more comments
          </button>
        )}
        {showComments && comments?.length > showNumComment && (
          <button
            className="text-secondaryText text-xs mb-2"
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
