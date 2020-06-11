import React, { useEffect, useState } from "react";
import ChatPanel from "../comp/Chat/ChatPanel";
import { getMessages, addMessage } from "../redux/actions";
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
  const messages = useSelector(state => state.messages[channelId]);
  const me = useSelector(state => state.self.username);
  const handleSendMessage = text => {
    dispatch(
      addMessage({
        channelId,
        content: text
      })
    );
  };
  return (
    <ChatPanel
      me={me}
      messages={messages}
      handleSendMessage={handleSendMessage}
    />
  );
}

export default withRouter(ChatPanelContainer);
