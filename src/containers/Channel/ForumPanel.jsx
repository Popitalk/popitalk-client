import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannel } from "../../redux/actions";
import ChannelDescription from "../../comp/Channel/ChannelDescription";
import ChannelChat from "../../comp/Channel/ChannelChat";
import NewChannelPost from "../../comp/Channel/NewChannelPost";

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
    removePost,
    saveComment,
    draft,
    defaultAvatar,
    toggleLike,
    ownId
  },
  ref
) => {
  return (
    <div ref={ref} className="p-24 px-32 bg-secondaryBackground">
      <ChannelDescription
        name={name}
        icon={icon}
        description={description}
        adminList={adminList}
        status={status}
      />
      <NewChannelPost saveDraft={saveDraft} savePost={savePost} draft={draft} />
      <ChannelChat
        comments={comments}
        posts={posts}
        saveComment={saveComment}
        defaultAvatar={defaultAvatar}
        toggleLike={toggleLike}
        ownId={ownId}
        removePost={removePost}
      />
    </div>
  );
};

export default React.forwardRef(ForumPanel);
