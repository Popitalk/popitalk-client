import React from "react";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";

function ChatPanel({ messages, typerIDs, typerAvatars }) {
  return (
    <section className="relative max-w-sm p-2 bg-primaryBackground">
      <ChatHeader />
      <ChatMessages
        messages={messages}
        typerIDs={typerIDs}
        typerAvatars={typerAvatars}
      />
      <ChatActions />
    </section>
  );
}

export default ChatPanel;
