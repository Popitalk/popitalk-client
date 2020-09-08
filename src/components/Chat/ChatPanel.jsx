import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";
import GifTable from "./GifTable";

export default function ChatPanel({
  channelId,
  channelMessages,
  openFollowersList,
  followersCount,
  isRoom,
  isGifsOpen,
  updateGifsOpen
}) {
  return (
    <div className="w-84 h-full bg-primaryBackground flex flex-col">
      <ChatHeader
        channelId={channelId}
        openFollowersList={openFollowersList}
        followersCount={followersCount}
        isRoom={isRoom}
      />
      {channelMessages ? (
        <ChatMessages
          channelId={channelId}
          channelMessages={channelMessages}
          isGifsOpen={isGifsOpen}
        />
      ) : (
        <p className="flex w-full h-full text-secondaryText text-sm items-center justify-center bg-highlightBackground">
          This is the start of the chat!
        </p>
      )}
      {isGifsOpen ? <GifTable updateGifsOpen={updateGifsOpen} /> : null}
      <ChatActions updateGifsOpen={updateGifsOpen} isGifsOpen={isGifsOpen} />
    </div>
  );
}
