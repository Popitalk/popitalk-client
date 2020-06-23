import React, { useState } from "react";
import ChatOptionsButton from "./ChatOptionsButton";
import MessageAuthorAvatar from "./MessageAuthorAvatar";
import MessageAuthorUsername from "./MessageAuthorUsername";
import MessageCreatedTime from "./MessageCreatedTime";
import MessageHighlightSpan from "./MessageHighlightSpan";
import MessageContent from "./MessageContent";

export default function ChatMessage({
  message,
  previousMessage,
  handleResend,
  handleDelete,
  defaultAvatar
}) {
  const [isClicked, setIsClicked] = useState(false);
  // Variable that controls the interval between messages fusing
  const messageFuseTime = 30000;
  const conditions = {
    // Checks if a message is the first one, or messageFuseTime is
    //less than the time that passed between previous or current massage.
    unfusedMessage:
      !previousMessage ||
      (new Date(message.createdAt) - new Date(previousMessage.createdAt) >
        messageFuseTime &&
        message.author.id === previousMessage.author.id),
    // Checks if you are the author of the message,
    // if handleresend and delete methods are defined
    // if message type is other than accepted.
    displayButton:
      message.author.username === message.me &&
      (handleResend || handleDelete) &&
      (message?.type === void undefined ||
        message?.type?.toLowerCase() === "rejected"),
    // Check if message is of type 'rejected'
    messageAccepted: message?.type === void undefined,
    messageRejected: message?.type?.toLowerCase() === "rejected",
    messagePending: message?.type?.toLowerCase() === "pending"
  };

  if (conditions.unfusedMessage) {
    return (
      <div className="flex flex-col mt-4 mx-2">
        <div className="flex items-center space-x-2 text-xs ml-1">
          <MessageAuthorAvatar
            message={message}
            defaultAvatar={defaultAvatar}
          />
          <MessageAuthorUsername username={message.author.username} />
          <MessageCreatedTime createdAt={message.createdAt} />
        </div>
        <div className="flex mt-1 flex-around bg:primaryBackground hover:bg-secondaryBackground rounded-md cursor-pointer chat-options-button-parent">
          <span className="flex justify-center">
            <MessageHighlightSpan
              me={message.me}
              username={message.author.username}
            />
          </span>
          <MessageContent message={message} />
          <ChatOptionsButton
            handleDelete={handleDelete}
            handleResend={handleResend}
            conditions={conditions}
            message={message}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        role="button"
        onClick={() => setIsClicked(!isClicked)}
        className="flex flex-col mx-2 bg-primaryBackground hover:bg-secondaryBackground rounded-md"
      >
        {isClicked ? (
          <div className="flex items-center space-x-2 text-xs ml-3 p-1">
            <MessageCreatedTime createdAt={message.createdAt} />
          </div>
        ) : null}
        <div className="flex flex-around chat-options-button-parent">
          <span className="flex justify-center">
            <MessageHighlightSpan
              me={message.me}
              username={message.author.username}
            />
          </span>
          <MessageContent message={message} />
          <ChatOptionsButton
            handleDelete={handleDelete}
            handleResend={handleResend}
            conditions={conditions}
            message={message}
          />
        </div>
      </div>
    );
  }
}
