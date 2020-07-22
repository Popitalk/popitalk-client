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
    <div className="w-dropdown h-full py-2 bg-primaryBackground flex flex-col md:w-84">
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
        <h1 className="flex text-secondaryText text-xs justify-center mt-56 mb-12">
          This is the start of the chat!
        </h1>
      )}
      {isGifsOpen ? <GifTable /> : null}
      <ChatActions updateGifsOpen={updateGifsOpen} />
    </div>
  );
}
