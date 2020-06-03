import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannel } from "../../redux/actions";
import ChannelDescription from "../../comp/Channel/ChannelDescription";
import ChannelChat from "../../comp/Channel/ChannelChat";
import NewChannelPost from "../../comp/Channel/NewChannelPost";

export default function ForumPanel({
  name,
  icon,
  description,
  adminList,
  status,
  posts,
  comments
}) {
  return (
    <div className="px-32 pt-40">
      <ChannelDescription
        name={name}
        icon={icon}
        description={description}
        adminList={adminList}
        status={status}
      />
      <NewChannelPost />
      <ChannelChat comments={comments} posts={posts} />
    </div>
  );
}