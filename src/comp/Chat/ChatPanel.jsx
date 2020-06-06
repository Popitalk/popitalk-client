import React from "react";
import AvatarDeck from "../AvatarDeck";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";

function ChatPanel({ typerAvatars, typerIDs, ...props }) {
  return (
    <section className="w-dropdown h-full p-2 bg-primaryBackground flex flex-col">
      <div className="h-auto">
        <ChatHeader />
      </div>
      <div className="overflow-auto">
        <ChatMessages {...props} />
      </div>
      <div className="h-auto">
        {typerAvatars && typerAvatars.length > 0 ? (
          <div className="flex mb-4 space-x-2 h-auto">
            <AvatarDeck ids={typerIDs} avatars={typerAvatars} />
            <span className="text-secondaryText">Typing...</span>
          </div>
        ) : (
          <></>
        )}
        <ChatActions />
      </div>
    </section>
  );
}

export default ChatPanel;
