import React from "react";
import ChannelsList from "../InfoCardLists/ChannelsList";
import Button from "../Button";
import SuggestionCard from "../SuggestionCard";
import MiniFriendsList from "../MiniFriendsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChannelsPanel({
  channels,
  selected,
  friends,
  handleSelect,
  handleCollapse
}) {
  return (
    <div className="w-full px-2 py-4 my-12 md:my-0 bg-primaryBackground md:max-w-sm">
      <div className="items-center justify-around hidden w-full px-4 pl-0 mb-4 md:flex">
        <button
          className="p-4 flex items-center flex-col"
          onClick={handleCollapse}
        >
          <FontAwesomeIcon
            icon="bars"
            className="cursor-pointer text-secondaryText hover:text-highlightText"
          />
        </button>
        <h3 className="text-3xl font-bold btn-playing">Channels</h3>
        <h3 className="text-2xl font-bold btn-playing">Friends</h3>
      </div>
      {/*<div className="flex items-center mb-4">*/}
      {/*  /!* <FontAwesomeIcon icon="globe-americas" className="ml-2 mr-2 text-3xl" /> *!/*/}
      {/*  <h3 className="ml-2 mr-auto text-3xl font-bold">Channels</h3>*/}
      {/*  */}
      {/*  /!* <Button size="md">Create</Button> *!/*/}
      {/*</div>*/}
      <MiniFriendsList friends={friends} />
      <div className="flex flex-row items-center">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-1 sm:mt-5">
          <div>
            <div className="flex items-center">
              <h4 className="mt-4 mb-2 ml-2 mr-3 text-lg font-semibold text-secondaryText">
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
          </div>
          <div>
            <h4 className="mt-4 mb-2 ml-2 text-lg font-semibold text-secondaryText">
              Following
            </h4>
            <ChannelsList
              channels={channels}
              selected={selected}
              handleSelect={handleSelect}
              className="ml-2"
            />
          </div>
        </div>
      </div>
      <div className="sm:mt-10">
        <h4 className="mt-4 mb-2 ml-2 text-lg font-semibold text-secondaryText">
          Suggested
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-1">
          <div className="flex justify-center py-2">
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
          <div className="flex justify-center py-2">
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
  );
}
