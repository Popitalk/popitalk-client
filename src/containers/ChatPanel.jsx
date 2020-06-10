import React, { useEffect, useState } from "react";
import ChatPanel from "../comp/Chat/ChatPanel";
import { getMessages } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

function ChatPanelContainer(props) {
  const channelId = props.match.params.roomId || props.match.params.channelId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMessages({
        channelId
      })
    );
  }, [channelId, dispatch]);
  const messages = useSelector(
    state =>
      state.messages[props.match.params.roomId || props.match.params.channelId]
  );
  console.log(messages);
  return <ChatPanel messages={messages} />;
}

export default withRouter(ChatPanelContainer);
