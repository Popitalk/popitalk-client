import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChannelsList from "./ChannelsList";
import Button from "./Button";

export default function ChannelsPanel({ channels, selected, handleSelect }) {
  return (
    <div className="bg-secondaryBackground max-w-md py-4 pr-4">
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon="globe-americas" className="text-3xl ml-6 mr-2" />
        <h3 className="text-3xl font-bold mr-auto">Channels</h3>
        <Button size="md">Create</Button>
      </div>
      <ChannelsList
        channels={channels}
        selected={selected}
        handleSelect={handleSelect}
        className="ml-4"
      />
      <h4 className="text-lg font-semibold text-secondaryText ml-6 mt-4">
        DISCOVER
      </h4>
    </div>
  );
}
