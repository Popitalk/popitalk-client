import React from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ messages, me, ...props }) {
  if (messages) {
    const tempMessages = JSON.parse(JSON.stringify(messages));
    return (
      <>
        {tempMessages.map((message, i) => {
          message.me = me;
          // Passes the previous message in a list to compare creation times
          // for message fusing functionality.
          let previousMessage = null;
          if (tempMessages[i - 1]) {
            previousMessage = tempMessages[i - 1];
          }
          return (
            <ChatMessage
              key={i}
              previousMessage={previousMessage}
              message={message}
              {...props}
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
