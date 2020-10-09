import React from "react";
import ChannelDescription from "../../components/Channel/ChannelDescription";
import NewChannelPost from "../../components/Channel/NewChannelPost";
import PostsListContainer from "../PostsListContainer";

const ForumPanel = (
  {
    name,
    icon,
    description,
    adminList,
    status,
    saveDraft,
    savePost,
    draft,
    handleFollow,
    isMember,
    isAdmin,
    isOwner,
    handleUnfollow,
    handleListAdmins,
    channelId
  },
  ref
) => {
  return (
    <div
      ref={ref}
      className="px-2 py-32 sm:px-8 md:px-16 lg:px-32 bg-secondaryBackground justify-center"
    >
      <ChannelDescription
        name={name}
        icon={icon}
        description={description}
        adminList={adminList}
        status={status}
        handleFollow={handleFollow}
        isMember={isMember}
        isOwner={isOwner}
        handleUnfollow={handleUnfollow}
        handleListAdmins={handleListAdmins}
      />
      {isAdmin && (
        <NewChannelPost
          saveDraft={saveDraft}
          savePost={savePost}
          draft={draft}
        />
      )}
      <PostsListContainer
        channelId={channelId}
        isMember={isMember}
        isAdmin={isAdmin}
      />
    </div>
  );
};

export default React.forwardRef(ForumPanel);
