import React from "react";
import { useSelector } from "react-redux";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";
import GifTable from "./GifTable";
import strings from "../../helpers/localization";

export default function ChatPanel({
  channelId,
  channelMessages,
  openFollowersList,
  followersCount,
  isRoom,
  isGifsOpen,
  updateGifsOpen,
  isMember
}) {
  const { loggedIn } = useSelector(state => state.general);

  return (
    <div className="w-84 h-full bg-background-primary flex flex-col">
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
        <p className="flex w-full h-full text-copy-secondary text-xs items-center justify-center">
          This is the start of the chat!
        </p>
      )}
      {isGifsOpen ? <GifTable updateGifsOpen={updateGifsOpen} /> : null}
      {isMember ? (
        <ChatActions updateGifsOpen={updateGifsOpen} isGifsOpen={isGifsOpen} />
      ) : (
        <div className="h-18 w-full flex bg-background-secondary text-sm text-copy-secondary items-center justify-center cursor-not-allowed select-none">
          <h1>{loggedIn ? strings.chatDisabledText : "Sign in to chat!"}</h1>
        </div>
      )}
    </div>
  );
}
