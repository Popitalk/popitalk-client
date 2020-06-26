import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatActions from "./ChatActions";
import "../../components/ChatPanel/ChatPanel.css";

export default function ChatPanel({ channelId, channelMessages }) {
  return (
    <div className="w-dropdown h-full py-2 bg-primaryBackground flex flex-col md:w-84">
      <ChatHeader />
      {channelMessages ? (
        <ChatMessages channelId={channelId} channelMessages={channelMessages} />
      ) : (
        <h1 className="flex text-secondaryText text-xs justify-center mt-56 mb-12">
          This is the start of the chat!
        </h1>
      )}
      <div className="h-8"></div>
      <ChatActions />
    </div>
  );
}
