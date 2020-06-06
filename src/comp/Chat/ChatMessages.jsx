import React from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ messages, handleResend, handleDelete }) {
  return (
    <>
      {messages.map((message, i) => {
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
}

export default ChatMessages;
