import React from "react";
import PostContainer from "../../containers/PostContainer";
import strings from "../../localization/strings";

export default function ChannelChat({ isMember, posts, displayControls }) {
  return (
    <div className="flex flex-col h-auto">
      {posts &&
        posts.map(post => {
          return (
            <PostContainer
              key={post.id}
              postId={post.id}
              isMember={isMember}
              displayControls={displayControls}
            />
          );
        })}
      {(!posts || (posts && posts.length === 0)) && (
        <p className="text-copy-secondary text-center text-sm py-32">
          {strings.channelWelcomePost}
        </p>
      )}
    </div>
  );
}
