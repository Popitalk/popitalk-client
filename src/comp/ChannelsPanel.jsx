import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChannelsList from "./InfoCardLists/ChannelsList";
import Button from "./Button";

export default function ChannelsPanel({ channels, selected, handleSelect }) {
  return (
    <div className="bg-primaryBackground max-w-sm py-4 pr-2 pl-2">
      <div className="flex items-center mb-4">
        {/* <FontAwesomeIcon icon="globe-americas" className="text-3xl ml-2 mr-2" /> */}
        <h3 className="text-3xl font-bold ml-2 mr-auto">Channels</h3>
        {/* <Button size="md">Create</Button> */}
      </div>
      <div className="flex flex-row items-center">
        <h4 className="text-lg font-semibold text-secondaryText ml-2 mr-2 mb-2 mt-2">
          Your channels
        </h4>
        <Button size="sm" icon="plus" background="primaryButton" onClick="" />
      </div>
      <ChannelsList
        channels={channels}
        selected={selected}
        handleSelect={handleSelect}
        className="ml-2"
      />
      <h4 className="text-lg font-semibold text-secondaryText ml-2 mb-2 mt-4">
        Suggested
      </h4>
    </div>
  );
}
