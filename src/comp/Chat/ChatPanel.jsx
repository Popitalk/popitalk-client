import React from "react";
import AvatarDeck from "../AvatarDeck";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";
import Spinner from "../Spinner";

function ChatPanel({
  typerAvatars,
  handleSendMessage,
  handleDelete,
  typerIDs,
  containerRef,
  scrolledToTop,
  ...props
}) {
  return (
    <section className="w-dropdown h-full py-2 bg-primaryBackground flex flex-col md:w-84">
      <div className="h-auto">
        <ChatHeader />
      </div>
      <div ref={containerRef} className="overflow-auto h-full mt-1">
        {scrolledToTop ? (
          <Spinner />
        ) : (
          <h1>You`&apos;`re viewing the oldest messages</h1>
        )}
        <ChatMessages
          handleResend={handleSendMessage}
          handleDelete={handleDelete}
          {...props}
        />
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
        <ChatActions handleSendMessage={handleSendMessage} />
      </div>
    </section>
  );
}

export default ChatPanel;
