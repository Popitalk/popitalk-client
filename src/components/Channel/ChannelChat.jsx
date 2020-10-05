import React from "react";
import ChannelPost from "./ChannelPost";
import moment from "moment";
import strings from "../../helpers/localization";

export default function ChannelChat({
  id,
  isMember,
  posts,
  comments,
  saveComment,
  defaultAvatar,
  toggleLike,
  ownId,
  openDeletePostModal,
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
              timeFromPost={moment(post.createdAt)
                .locale(strings.location)
                .fromNow()}
              text={post.content}
              liked={post.liked}
              isMember={isMember}
              comments={postComments}
              saveComment={saveComment}
              defaultAvatar={defaultAvatar}
              toggleLike={toggleLike}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              authorId={post.author.id}
              ownId={ownId}
              openDeletePostModal={openDeletePostModal}
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
