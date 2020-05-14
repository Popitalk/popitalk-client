import React from "react";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";

function ChatPanel() {
  return (
    <section className="relative p-2 bg-primaryBackground">
      <ChatHeader />
      <ChatMessages />
      <ChatActions />
    </section>
  );
}

export default ChatPanel;
