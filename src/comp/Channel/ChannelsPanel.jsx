import React from "react";
import ChannelsList from "../InfoCardLists/ChannelsList";
import Button from "../Button";
import SuggestionCard from "../SuggestionCard";
import MiniFriendsList from "../MiniFriendsList";

export default function ChannelsPanel({
  channels,
  selected,
  friends,
  handleSelect
}) {
  return (
    <div className="w-full my-12 bg-primaryBackground py-4 px-2 md:max-w-sm">
      <div className="hidden items-center justify-between px-4 w-full mb-4 md:flex">
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 sm:mt-5">
          <div>
            <div className="flex items-center">
              <h4 className="text-lg font-semibold text-secondaryText ml-2 mb-2 mt-4 mr-3">
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
            <h4 className="text-lg font-semibold text-secondaryText ml-2 mb-2 mt-4">
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
        <h4 className="text-lg font-semibold text-secondaryText ml-2 mb-2 mt-4">
          Suggested
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-1">
          <div className="py-2 flex justify-center">
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
          <div className="py-2 flex justify-center">
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
