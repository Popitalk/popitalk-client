import React from "react";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";
import ChatDraft from "../ChatDraft";
import "./ChatPanel.css";

export default function ChatPanel() {
  return (
    <div className="ChatPanel--container">
      <ChatHeader />
      <ChatMessages />
      <ChatDraft />
    </div>
  );
}
