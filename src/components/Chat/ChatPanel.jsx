import React, { useState } from "react";
import { useSelector } from "react-redux";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";
import GifTable from "./GifTable";
import strings from "../../helpers/localization";
import Button from "../Controls/Button";

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
  const [chatPanelExpanded, setChatPanelExpanded] = useState(false);

  return (
    <div className="h-full">
      <Button
        hoverable
        styleNone
        icon={chatPanelExpanded === true ? "times" : "comment"}
        styleNoneIconClassName="text-xl"
        className="absolute bottom-0 right-0 mr-4 mb-24 z-20 rounded-full bg-copy-link shadow-lg md:hidden flex items-center justify-center text-copy-tertiary w-14 h-14"
        analyticsString="Collapse Button: PanelHeader"
        onClick={() => setChatPanelExpanded(!chatPanelExpanded)}
      />
      <div
        className={
          chatPanelExpanded === true
            ? "w-screen sm:w-full h-full"
            : "hidden md:flex h-full"
        }
      >
        <div className="w-full sm:w-84 h-full bg-background-primary flex flex-col">
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
            <div className="flex w-full h-full text-copy-secondary text-xs items-center justify-center">
              This is the start of the chat!
            </div>
          )}
          {isGifsOpen ? <GifTable updateGifsOpen={updateGifsOpen} /> : null}
          {isMember ? (
            <ChatActions
              updateGifsOpen={updateGifsOpen}
              isGifsOpen={isGifsOpen}
            />
          ) : (
            <div className="h-14 p-2 w-full bg-background-primary select-none">
              <Button
                styleNone
                icon="paper-plane"
                styleNoneContent={
                  loggedIn ? strings.chatDisabledText : strings.signInToChat
                }
                className="flex-shrink-0 w-full h-full space-x-2 rounded-lg bg-background-secondary text-sm text-copy-secondary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
