import React from "react";
import PostsListContainer from "../PostsListContainer";
import NewChannelPostContainer from "../NewChannelPostContainer";
import ChannelDescriptionContainer from "../ChannelDescriptionContainer";
import strings from "../../localization/strings";

const ForumPanel = ({ channelId, isMember, isAdmin, isOwner, status }, ref) => {
  return (
    <div
      ref={ref}
      className="px-6 py-32 sm:px-8 md:px-8 lg:px-36 xl:px-48 bg-background-secondary"
    >
      <ChannelDescriptionContainer
        channelId={channelId}
        isMember={isMember}
        isOwner={isOwner}
        status={status}
      />
      <h3 className="text-xl text-copy-primary font-bold pb-8">
        {strings.announcement}
      </h3>
      {isAdmin && <NewChannelPostContainer channelId={channelId} />}
      <PostsListContainer
        channelId={channelId}
        isMember={isMember}
        isAdmin={isAdmin}
      />
    </div>
  );
};

export default React.forwardRef(ForumPanel);
