import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChannelsList from "./InfoCardLists/ChannelsList";
import Button from "./Button";
import SuggestionCard from "./SuggestionCard";
import MiniFriendsList from "./MiniFriendsList";
import "./channelsPanel.css";

export default function ChannelsPanel({
  channels,
  selected,
  friends,
  handleSelect
}) {
  const [panelOpen, setPanelOpen] = useState(false);
  const handleClosePanel = () => {
    setPanelOpen(!panelOpen);
  };
  return (
    <div className="mt-12 flex fixed z-30 h-full sm:relative">
      <div
        className={`${
          panelOpen ? "" : "hidden"
        } overflow-y-scroll h-full sm:h-auto sm:overflow-y-auto`}
      >
        <div className="bg-primaryBackground max-w-24 py-4 px-2">
          <div className="flex items-center justify-between px-4 w-full mb-4">
            <h3 className="text-3xl font-bold btn-playing">Channels</h3>
            <h3 className="text-2xl font-bold btn-playing">Friends</h3>
          </div>
          {/*<div className="flex items-center mb-4">*/}
          {/*  /!* <FontAwesomeIcon icon="globe-americas" className="text-3xl ml-2 mr-2" /> *!/*/}
          {/*  <h3 className="text-3xl font-bold ml-2 mr-auto">Channels</h3>*/}
          {/*  */}
          {/*  /!* <Button size="md">Create</Button> *!/*/}
          {/*</div>*/}
          <MiniFriendsList friends={friends} />
          <div className="flex flex-row items-center">
            <h4 className="text-lg font-semibold text-secondaryText ml-2 mr-2 mb-2 mt-2">
              Your channels
            </h4>
            <Button
              size="sm"
              icon="plus"
              background="primaryButton"
              onClick=""
            />
          </div>
          <ChannelsList
            channels={channels}
            selected={selected}
            handleSelect={handleSelect}
            className="ml-2"
          />
          <h4 className="text-lg font-semibold text-secondaryText ml-2 mb-2 mt-4">
            Following
          </h4>
          <ChannelsList
            channels={channels}
            selected={selected}
            handleSelect={handleSelect}
            className="ml-2"
          />
          <h4 className="text-lg font-semibold text-secondaryText ml-2 mb-2 mt-4">
            Suggested
          </h4>
          <div className="flex w-full flex-2 px-4 flex-col">
            <div className="py-2">
              <SuggestionCard
                id={123}
                name="Thelmo Society"
                icon="https://i.imgur.com/xCGu56D.jpg"
                videoStatus="playing"
                videoTitle="Video Title"
                videoSource="youtube"
                videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
                activeViewers="2,000"
              />
            </div>
            <div className="py-2">
              <SuggestionCard
                id={123}
                name="Thelmo Society"
                icon="https://i.imgur.com/xCGu56D.jpg"
                videoStatus="paused"
                videoTitle="Video Title"
                videoSource="youtube"
                videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
                activeViewers="2,000"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondaryBackground w-1 bg-quaternaryBackground flex justify-center">
        <Button
          id="panelButton"
          size="md"
          icon={panelOpen ? "caret-square-left" : "caret-square-right"}
          background="primaryButton"
          onClick={handleClosePanel}
          className="fixed z-30"
        />
      </div>
    </div>
  );
}
