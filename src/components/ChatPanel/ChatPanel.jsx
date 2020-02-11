import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";
import ChatDraft from "../ChatDraft";
import "./ChatPanel.css";

export default function ChatPanel() {
  const { channelId } = useParams();
  const channelMessages = useSelector(
    state => state.generalState.messages[channelId]
  );
  return (
    <div className="ChatPanel--container">
      <ChatHeader />
      {channelMessages ? (
        <ChatMessages channelId={channelId} channelMessages={channelMessages} />
      ) : (
        <div className="ChatMessages--notLoaded" />
      )}
      <ChatDraft />
    </div>
  );
}
