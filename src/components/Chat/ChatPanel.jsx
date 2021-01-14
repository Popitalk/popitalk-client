import React, { useState } from "react";
import { useSelector } from "react-redux";

import ChatHeader from "./ChatHeader";
import ChatMessageList from "./ChatMessageList";
import ChatActions from "./ChatActions";
import GifTable from "./GifTable";
import strings from "../../localization/strings";
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
  const isRemoved = useSelector(state => state.ui.isRemoved);

  return (
    <div className={`${isRemoved === true && "hidden"} h-full`}>
      <Button
        hoverable
        styleNone
        icon={chatPanelExpanded === true ? "arrow-left" : "comment"}
        styleNoneIconClassName="text-xl"
        className={
          chatPanelExpanded === true
            ? "absolute top-0 left-0 ml-4 mt-14 text-copy-secondary"
            : "absolute bottom-0 right-0 m-4 rounded-full bg-copy-link shadow-lg md:hidden flex items-center justify-center text-copy-tertiary w-14 h-14"
        }
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
        <div className="w-screen sm:w-84 h-full bg-background-primary flex flex-col">
          <ChatHeader
            channelId={channelId}
            openFollowersList={openFollowersList}
            followersCount={followersCount}
            isRoom={isRoom}
          />
          {channelMessages.length === 0 || !channelMessages ? (
            <div className="flex items-center justify-center h-full w-full">
              <p className="text-copy-secondary text-xs select-none">
                {strings.emptyChatPanel}
              </p>
            </div>
          ) : (
            <ChatMessageList
              channelId={channelId}
              channelMessages={channelMessages}
              isGifsOpen={isGifsOpen}
            />
          )}

          {isGifsOpen && <GifTable updateGifsOpen={updateGifsOpen} />}
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
