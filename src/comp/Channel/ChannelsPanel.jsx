import React from "react";
import ChannelsList from "../InfoCardLists/ChannelsList";
import Button from "../Button";
import SuggestionCard from "../SuggestionCard";
import MiniFriendsList from "../MiniFriendsList";
import PanelHeader from "../PanelHeader";

export default function ChannelsPanel({
  channels,
  selected,
  friends,
  handleSelect,
  handleCollapse,
  updateSelectedPage,
  selectedPage
}) {
  return (
    <div className="w-full px-2 pt-2 my-12 md:my-0 bg-primaryBackground md:w-84">
      <PanelHeader
        handleCollapse={handleCollapse}
        updateSelectedPage={updateSelectedPage}
        selectedPage={selectedPage}
      />
      {/*<div className="flex items-center mb-4">*/}
      {/*  /!* <FontAwesomeIcon icon="globe-americas" className="ml-2 mr-2 text-3xl" /> *!/*/}
      {/*  <h3 className="ml-2 mr-auto text-3xl font-bold">Channels</h3>*/}
      {/*  */}
      {/*  /!* <Button size="md">Create</Button> *!/*/}
      {/*</div>*/}
      <MiniFriendsList friends={friends} />
      <div className="flex flex-row items-center">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-1 sm:mt-4">
          <div>
            <div className="flex items-center">
              <h4 className="my-4 mx-2 text-md font-semibold text-secondaryText">
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
              className=""
            />
          </div>
          <div>
            <h4 className="my-4 mx-2 text-md font-semibold text-secondaryText">
              Following
            </h4>
            <ChannelsList
              channels={channels}
              selected={selected}
              handleSelect={handleSelect}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="sm:mt-10">
        <h4 className="my-4 mx-2 text-md font-semibold text-secondaryText">
          Suggested
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-1">
          <div className="flex justify-center py-2 px-2">
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
