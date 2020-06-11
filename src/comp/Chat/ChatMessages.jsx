import React from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ messages, me, ...props }) {
  if (messages) {
    const tempMessages = JSON.parse(JSON.stringify(messages));
    return (
      <>
        {tempMessages.map((message, i) => {
          message.me = me;
          return <ChatMessage key={i} message={message} {...props} />;
        })}
      </>
    );
  } else {
    return null;
  }
}

export default ChatMessages;
