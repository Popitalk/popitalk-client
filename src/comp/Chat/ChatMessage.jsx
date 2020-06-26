import React, { useState } from "react";
import MessageAuthorAvatar from "./MessageAuthorAvatar";
import MessageCreatedTime from "./MessageCreatedTime";
import MessageAuthorUsername from "./MessageAuthorUsername";
import MessageContent from "./MessageContent";
import MessageHighlightSpan from "./MessageHighlightSpan";
import ChatOptionsButton2 from "./ChatOptionsButton2";
import DateMessage from "./DateMessage";

export default function ChatMessage({ message, ownId, defaultAvatar }) {
  const [isClicked, setIsClicked] = useState(false);
  if (message.type === "date") return <DateMessage message={message} />;
  else if (
    message.type === "firstMessage" ||
    message.type === "firstLastMessage"
  ) {
    return (
      <div key={message.id}>
        <div className="flex items-center space-x-2 text-xs ml-1">
          <MessageAuthorAvatar
            defaultAvatar={defaultAvatar}
            message={message}
          />
          <MessageAuthorUsername username={message.username} />
          <MessageCreatedTime createdAt={message.createdAt} />
        </div>
        <div className="flex mx-2 chat-options-button-parent">
          <MessageHighlightSpan ownId={ownId} userId={message.userId} />
          <MessageContent message={message} />
          <ChatOptionsButton2 ownId={ownId} message={message} />
        </div>
      </div>
    );
  } else if (message.type === "message" || message.type === "lastMessage") {
    return (
      <React.Fragment>
        {isClicked ? (
          <div className="flex items-center space-x-2 text-xs ml-3 p-1">
            <MessageCreatedTime createdAt={message.createdAt} />
          </div>
        ) : null}
        <div
          role="button"
          onClick={() => setIsClicked(!isClicked)}
          className="flex mx-2 bg-primaryBackground hover:bg-secondaryBackground rounded-md chat-options-button-parent"
          key={message.id}
        >
          <MessageHighlightSpan ownId={ownId} userId={message.userId} />

          <MessageContent message={message} />
          <ChatOptionsButton2 ownId={ownId} message={message} />
        </div>
      </React.Fragment>
    );
  }
}
