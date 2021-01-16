import React from "react";
import PropTypes from "prop-types";
import RoomIcon from "../Controls/RoomIcon";
import ReactTooltip from "react-tooltip";
import { channelHasNewMessage } from "../../util/channelHasNewMessage";
function CollapsedPanel({
  rooms,
  channels,
  selected,
  handleSelectRoom,
  handleSelect,
  type
}) {
  const sectionStyle = "flex flex-col w-full items-center py-2";
  const iconStyle =
    "flex-shrink-0 transition transform ease-in-out hover:scale-110 duration-100 m-1 rounded-circle p-2px";
  return (
    <div className="hidden sm:flex bg-background-primary px-2 w-18 h-full select-none overflow-y-auto">
      {/* == CHANNELS == */}
      {type === "channels" ? (
        <section className={sectionStyle}>
          {channels.map(channel => {
            const roomIcon = (
              <RoomIcon
                ids={[channel.id]}
                images={[channel.icon]}
                watching={channel.watching}
                size="md"
                tooltip={channel.name}
                tooltipPlace="right"
              />
            );
            return (
              <div
                key={channel.id}
                className={`${iconStyle} ${
                  selected === channel.id && "bg-gradient-tr-primary"
                }`}
                onClick={() => handleSelect(channel.id)}
                role="button"
              >
                {roomIcon}
              </div>
            );
          })}
        </section>
      ) : (
        <div className={sectionStyle}>
          {rooms.map(room => {
            const images = room.members.map(m => m.avatar);
            const name = room.members.map(m => " " + m.username).join();
            const roomIcon = (
              <RoomIcon
                images={images}
                self={room.type === "self"}
                online={room.online}
                watching={room.watching}
                notifications={channelHasNewMessage(room)}
                size="md"
                tooltip={name}
                tooltipPlace="right"
              />
            );
            return (
              <div
                key={room.id}
                className={`${iconStyle} ${
                  selected === room.id && "bg-gradient-tr-primary"
                }`}
                onClick={() => handleSelectRoom(room.id)}
                role="button"
              >
                {roomIcon}
              </div>
            );
          })}
        </div>
      )}
      <ReactTooltip
        effect="solid"
        backgroundColor="#F2F2F2"
        textColor="black"
        className="shadow-md rounded-md py-1 px-3"
        arrowColor="transparent"
      />
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
