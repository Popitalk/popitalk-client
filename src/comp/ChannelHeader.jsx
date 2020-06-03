import React, { useState } from "react";
import RoomIcon from "./RoomIcon";

export default function ChannelHeader({
  id,
  name,
  icon,
  videoStatus,
  type = "channel",
  select = "Video"
}) {
  const [selected, setSelected] = useState(select);
  const navButtons = ["Video", "Queue", "Channel", "Setting"];
  return (
    <header className="flex justify-between bg-disabledBackground my-1 mx-1">
      <div className="flex items-center">
        <RoomIcon
          ids={[id]}
          images={[icon]}
          watching={videoStatus === "playing" ? true : false}
          size="md"
          className=""
        />
        <p className="text-sm font-regular text-primaryText py-1 px-1">
          {type === "channel" ? name : `Private Room with ${name}`}
        </p>
      </div>
      {type === "channel" && (
        <nav className="flex flex-wrap justify-center">
          {navButtons.map(buttonName => {
            let className = "mx-1 my-1 font-bold focus:outline-none";
            if (selected == buttonName) {
              className = `${className} rainbow-text`;
            } else {
              className = `${className} text-secondaryText`;
            }
            return (
              <button
                className={className}
                onClick={() => setSelected(buttonName)}
              >
                {buttonName}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
