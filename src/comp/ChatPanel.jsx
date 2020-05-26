import React from "react";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";

function ChatPanel(props) {
  return (
    <section className="relative max-w-sm p-2 bg-primaryBackground">
      <ChatHeader />
      <ChatMessages {...props} />
      <ChatActions />
    </section>
  );
}

export default ChatPanel;
