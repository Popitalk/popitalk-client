import React from "react";
import "../VideoStatus.css";
import ChannelPost from "./ChannelPost";
import moment from "moment";

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
  icon
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
              timeFromPost={moment(post.createdAt).fromNow()}
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
            />
          );
        })}
      {(!posts || (posts && posts.length === 0)) && (
        <ChannelPost
          name={name}
          avatar={icon}
          timeFromPost={moment().fromNow()}
          text={`This is the start of ${name}! 🥳 🤗 👀 💩 😻 🥺 🦁Have fun watching together!`}
          saveComment={saveComment}
          toggleLike={toggleLike}
          ownId={ownId}
        />
        // <p className="text-secondaryText text-center text-sm py-32">
        //   There are no posts yet
        // </p>
      )}
    </div>
  );
}
