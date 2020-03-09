import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Channel.css";
import { getChannel } from "../../redux/actions";
import ChatPanel from "../ChatPanel";
import ChannelMain from "../ChannelMain";

export default function Channel() {
  const { channelId } = useParams();
  const channel = useSelector(state => state.channels[channelId]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (channel && !channel?.loaded) {
      dispatch(getChannel(channelId));
    } else if (channel && channel?.loaded) {
      console.log("ADD WATCHER");
    } else if (!channel) {
      dispatch(getChannel(channelId));
      console.log("NO CHANNEL");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  let privateAndNotMember = true;

  if (channel) {
    privateAndNotMember = !channel.public && !channel.isMember;
  }
  return (
    <div
      className={`Channel--container${
        privateAndNotMember ? " Channel--privateAndNotMember" : ""
      }`}
    >
      <ChannelMain
        channelId={channelId}
        channel={channel}
        privateAndNotMember={privateAndNotMember}
      />
      {!privateAndNotMember && <ChatPanel />}
    </div>
  );
}
