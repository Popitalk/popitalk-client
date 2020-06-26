import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import ChatPanel from "../comp/Chat/ChatPanel";
import "../components/ChatPanel/ChatPanel.css";

function ChatPanelContainer(props) {
  const channelId = props.match.params.roomId || props.match.params.channelId;
  const channelMessages = useSelector(state => state.messages[channelId]);
  return <ChatPanel channelMessages={channelMessages} channelId={channelId} />;
}

export default withRouter(ChatPanelContainer);
