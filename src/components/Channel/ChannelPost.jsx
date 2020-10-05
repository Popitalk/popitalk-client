import React, { useState, useRef, useEffect } from "react";
import AvatarIcon from "../Controls/AvatarIcon";
import ChannelComment from "./ChannelComment";
import NewChannelComment from "./NewChannelComment";
import ToggleIcon from "../Controls/ToggleIcon";
import useOnClickOutside from "use-onclickoutside";
import PopupMenu from "../Controls/PopupMenu";
import { openProfileModal } from "../../redux/actions";
import { useDispatch } from "react-redux";
import moment from "moment";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";

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
  openDeletePostModal,
  displayControls,
  handleGetComments,
  isLoading = false,
  isMember
}) {
  const [showNewComment, setShowNewComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const showNumComment = 3;
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

  return (
    <>
      {isLoading ? (
        <div className="bg-primaryBackground rounded-md p-4 my-8 max-w-md h-48 w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
                  <span className="text-secondaryText text-xs">
                    {timeFromPost}
                  </span>
                </div>
              </header>
              {displayControls && (
                <PopupMenu
                  options={[
                    {
                      name: "Delete",
                      handler: () => openDeletePostModal(id)
                    }
                  ]}
                  disabled={ownId !== authorId}
                  className="-mr-3"
                />
              )}
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
                {likeCount} {likeCount > 1 ? strings.likes : strings.like}
              </span>
              <span className="select-none hover:filter-brightness-9 duration-100">
                {commentCount}{" "}
                {commentCount > 1 ? strings.comments : strings.comment}
              </span>
            </section>
            {/* Like and Comment buttons */}
            {isMember ? (
              <footer className="flex text-secondaryText text-xl space-x-6 pb-2 items-center">
                <ToggleIcon
                  icons={{ default: ["far", "heart"], toggle: ["fa", "heart"] }}
                  status={liked}
                  toggleStatus={stat => toggleLike(id, "post", stat)}
                  className="bg-highlightBackground"
                >
                  {strings.like}
                </ToggleIcon>
                <Button
                  styleNone
                  icon={["far", "comment"]}
                  styleNoneContent={strings.comment}
                  styleNoneContentClassName="text-sm font-bold ml-2"
                  className="flex p-2 hover:filter-brightness-9"
                  onClick={handleComment}
                  analyticsString="Comment Button: ChannelPost"
                />
              </footer>
            ) : null}
          </div>
          {/* Comment Section */}
          <div className="my-2 px-1 w-84 sm:w-102 lg:w-104 max-w-xl">
            {((!showComments && commentCount > showNumComment) ||
              comments?.length < commentCount) && (
              <Button
                styleNone
                styleNoneContent="View more comments"
                className="text-secondaryText text-xs px-2"
                onClick={() => {
                  setShowComments(true);
                  if (comments?.length !== commentCount) {
                    handleGetComments(id);
                  }
                }}
                analyticsString="View more comments Button: ChannelPost"
              />
            )}
            {showComments && comments?.length === commentCount && (
              <Button
                styleNone
                styleNoneContent="Hide comments"
                className="text-secondaryText text-xs px-2"
                onClick={() => setShowComments(false)}
                analyticsString="Hide comments Button: ChannelPost"
              />
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
                    timeFromPost={moment(comment.createdAt)
                      .locale(strings.location)
                      .fromNow()}
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
                    timeFromPost={moment(comment.createdAt)
                      .locale(strings.location)
                      .fromNow()}
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
      )}
    </>
  );
}
