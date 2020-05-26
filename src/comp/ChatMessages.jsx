import React from "react";
import AvatarDeck from "./AvatarDeck";
import ChatMessage from "./ChatMessage";

function ChatMessages({
  messages,
  typerAvatars,
  typerIDs,
  handleResend,
  handleDelete
}) {
  return (
    <div className="relative h-chatBox">
      <div className="overflow-auto h-chatChild">
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
      </div>
      {typerAvatars && typerAvatars.length > 0 ? (
        <div className="absolute inset-x-0 bottom-0 flex items-center mb-4 space-x-2">
          <AvatarDeck ids={typerIDs} avatars={typerAvatars} />
          <span className="text-secondaryText">Typing...</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ChatMessages;
