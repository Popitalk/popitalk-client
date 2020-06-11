import React from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ messages, handleResend, handleDelete, me }) {
  if (messages) {
    const tempMessages = JSON.parse(JSON.stringify(messages));
    return (
      <>
        {tempMessages.map((message, i) => {
          message.me = me;
          return (
            <ChatMessage
              key={i}
              message={message}
              handleResend={handleResend}
              handleDelete={handleDelete}
            />
          );
        })}
      </>
    );
  } else {
    return null;
  }
}

export default ChatMessages;
