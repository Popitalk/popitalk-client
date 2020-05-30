import React, { useState } from "react";
import RoomIcon from "./RoomIcon";

export default function VideoChannelHeader({
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
    <header className="flex justify-between mx-1 my-1 bg-disabledBackground">
      <div className="flex items-center">
        <RoomIcon
          ids={[id]}
          images={[icon]}
          watching={videoStatus === "playing" ? true : false}
          size="md"
          className=""
        />
        <p className="px-1 py-1 text-sm font-regular text-primaryText">
          {type === "channel" ? name : `Private Room with ${name}`}
        </p>
      </div>
      {type === "channel" && (
        <nav className="flex flex-wrap justify-center">
          {navButtons.map((buttonName, i) => {
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
                key={i}
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
