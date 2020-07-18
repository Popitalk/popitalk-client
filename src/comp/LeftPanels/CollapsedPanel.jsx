import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import RoomIcon from "../Controls/RoomIcon";
import Button from "../Controls/Button";
import { Collapse } from "react-collapse";

function CollapsedPanel({
  rooms,
  channels,
  selected,
  handleSelectRoom,
  handleCollapse
}) {
  const [channelSelected, setChannelSelected] = useState(true);
  const [friendSelected, setFriendSelected] = useState(true);

  const onChannelClick = () => {
    setChannelSelected(!channelSelected);
  };
  const onFriendClick = () => {
    setFriendSelected(!friendSelected);
  };

  return (
    <div className="bg-primaryBackground px-2 flex flex-col items-center w-20 h-full select-none">
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
      <div className="bg-primaryBackground rounded-xl">
        <Button
          className="flex flex-col h-12 w-20 bg-secondaryBackground mb-1 shadow-none"
          shape="none"
          background="bgColor"
          selectedColor={channelSelected === true && "primary"}
          size="sm"
          onClick={onChannelClick}
        >
          Channels
        </Button>
        <Collapse isOpened={channelSelected}>
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
          </div>
        </Collapse>
      </div>
      {/* FRIENDS */}
      <div className="bg-primaryBackground rounded-xl mb-4">
        <Button
          className="flex flex-col h-12 w-20 mb-1 bg-secondaryBackground shadow-none"
          shape="none"
          background="bgColor"
          selectedColor={friendSelected === true && "primary"}
          onClick={() => onFriendClick()}
          size="sm"
        >
          Friends
        </Button>
        <Collapse isOpened={friendSelected}>
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
        </Collapse>
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
