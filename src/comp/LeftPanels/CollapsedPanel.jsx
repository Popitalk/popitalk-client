import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import ChannelsList from "../InfoCardLists/ChannelsList";
import RoomsList from "../InfoCardLists/RoomsList";
import moment from "moment";
import RoomIcon from "../Controls/RoomIcon";
import InfoCard from "../InfoCards/InfoCard";

function CollapsedPanel({
  rooms,
  channels,
  selected,
  handleSelectRoom,
  handleSelect,
  handleCollapse,
  selectedPage,
  updateSelectedPage
}) {
  return (
    <div className="bg-primaryBackground px-2 flex flex-col items-center w-20 h-auto select-none">
      <button
        className="py-5 w-full flex items-center flex-col focus:outline-none"
        onClick={handleCollapse}
      >
        <FontAwesomeIcon
          icon="bars"
          className="cursor-pointer text-secondaryText hover:text-highlightText duration-100 fa-1x transition transform ease-in-out hover:scale-110 duration-100"
        />
      </button>
      {/* CHANNELS */}
      <div className="bg-secondaryBackground rounded-xl py-4 mb-4">
        <button
          className={`${
            selectedPage === "channels"
              ? "text-highlightText"
              : "text-secondaryButtonText"
          } py-4 w-full flex items-center flex-col hover:text-highlightText duration-100 rounded-xl focus:outline-none transition transform ease-in-out hover:scale-110 duration-100`}
          onClick={() => updateSelectedPage("channels")}
        >
          <FontAwesomeIcon icon="tv" className="fa-1x" />
          <h3 className="text-xs p-1">Channels</h3>
        </button>
        <div className="flex flex-col w-full items-center">
          {channels.map(channel => {
            const roomIcon = (
              <RoomIcon
                ids={[channel.id]}
                images={[channel.icon]}
                watching={channel.watching}
                size="lg"
              />
            );
            return (
              <div
                key={channel.id}
                className={`flex-shrink-0 transition transform ease-in-out
                  hover:scale-110 duration-100 m-1 rounded-circle
                  ${selected === channel.id && "bg-highlightText"}`}
                onClick={() => handleSelectRoom(channel.id)}
                role="button"
              >
                {roomIcon}
              </div>
            );
          })}
          {/* <ChannelsList
            channels={channels}
            selected={selected}
            handleSelect={handleSelect}
            fullHeight={true}
          /> */}
        </div>
      </div>
      {/* FRIENDS */}
      <div className="bg-secondaryBackground rounded-xl py-4 mb-4">
        <button
          className={`${
            selectedPage === "friends"
              ? "text-highlightText"
              : "text-secondaryButtonText"
          } py-4 w-full flex items-center flex-col hover:text-highlightText duration-100 rounded-xl focus:outline-none transition transform ease-in-out hover:scale-110 duration-100`}
          onClick={() => updateSelectedPage("friends")}
        >
          <FontAwesomeIcon icon="user-friends" className="fa-1x" />
          <h3 className="text-xs p-1">Friends</h3>
        </button>
        <div className="flex flex-col w-full items-center">
          {rooms.map(room => {
            const images = room.members.map(m => m.avatar);

            const roomIcon = (
              <RoomIcon
                images={images}
                self={room.type === "self"}
                online={room.online}
                watching={room.watching}
                notifications={room.notifications}
                size="lg"
              />
            );
            return (
              <div
                key={room.id}
                className={`flex-shrink-0 transition transform ease-in-out
                  hover:scale-110 duration-100 m-1 rounded-circle
                  ${selected === room.id && "bg-highlightText"}`}
                onClick={() => handleSelectRoom(room.id)}
                role="button"
              >
                {roomIcon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

CollapsedPanel.propTypes = {
  channels: PropTypes.array
};
CollapsedPanel.defaultProps = {
  channels: []
};
export default CollapsedPanel;
