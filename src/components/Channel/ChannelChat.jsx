import React from "react";
import "../VideoStatus.css";
import ChannelPost from "./ChannelPost";
import strings from "../../helpers/localization";
import { formatDistanceStrict } from "date-fns/esm";

export default function ChannelChat({
  id,
  posts,
  comments,
  saveComment,
  defaultAvatar,
  toggleLike,
  ownId,
  removePost,
  name,
  icon,
  displayControls,
  handleGetComments
}) {
  return (
    <div className="flex flex-col h-auto">
      {posts &&
        posts.map((post, idx) => {
          const postComments = comments[post.id];

          return (
            <ChannelPost
              key={idx}
              id={post.id}
              name={post.author.username}
              avatar={post.author.avatar || defaultAvatar}
              timeFromPost={formatDistanceStrict(
                new Date(post.createdAt),
                new Date(),
                { addSuffix: true }
              )}
              text={post.content}
              liked={post.liked}
              comments={postComments}
              saveComment={saveComment}
              defaultAvatar={defaultAvatar}
              toggleLike={toggleLike}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              authorId={post.author.id}
              ownId={ownId}
              removePost={removePost}
              displayControls={displayControls}
              handleGetComments={handleGetComments}
            />
          );
        })}
      {(!posts || (posts && posts.length === 0)) && (
        <p className="text-secondaryText text-center text-sm py-32">
          {strings.channelWelcomePost}
        </p>
      )}
    </div>
  );
}
