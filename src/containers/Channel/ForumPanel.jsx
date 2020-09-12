import React from "react";
import ChannelDescription from "../../components/Channel/ChannelDescription";
import ChannelChat from "../../components/Channel/ChannelChat";
import NewChannelPost from "../../components/Channel/NewChannelPost";

const ForumPanel = (
  {
    name,
    icon,
    description,
    adminList,
    status,
    posts,
    comments,
    saveDraft,
    savePost,
    openDeletePostModal,
    saveComment,
    draft,
    defaultAvatar,
    toggleLike,
    ownId,
    handleFollow,
    isMember,
    handleUnfollow,
    handleListAdmins,
    handleGetComments,
    displayControls
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
        handleUnfollow={handleUnfollow}
        handleListAdmins={handleListAdmins}
      />
      {displayControls && (
        <NewChannelPost
          saveDraft={saveDraft}
          savePost={savePost}
          draft={draft}
        />
      )}
      <ChannelChat
        comments={comments}
        posts={posts}
        saveComment={saveComment}
        defaultAvatar={defaultAvatar}
        toggleLike={toggleLike}
        ownId={ownId}
        openDeletePostModal={openDeletePostModal}
        name={name}
        icon={icon}
        displayControls={displayControls}
        handleGetComments={handleGetComments}
      />
    </div>
  );
};

export default React.forwardRef(ForumPanel);
