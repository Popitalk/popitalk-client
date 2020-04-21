import React from "react";
import classnames from "classnames";
import RoomIcon from "./RoomIcon";

export default function RoomsList({ rooms, selected, handleSelect }) {
  const baseRoomClasses =
    "flex flex-row items-center p-1 bg-primaryBackground hover:bg-secondaryBackground rounded-lg cursor-pointer";
  return (
    <div>
      {rooms.map(room => {
        const roomClasses = classnames(baseRoomClasses, {
          "bg-secondaryBackground cursor-default": selected === room.id
        });
        const messageClasses = classnames("mt-1", {
          "text-secondaryText text-xs": !room.notifications,
          "text-primaryText text-xs font-bold": room.notifications
        });

        return (
          <div
            key={room.id}
            className={roomClasses}
            role="button"
            onClick={() => handleSelect(room.id)}
          >
            <RoomIcon
              images={room.images}
              self={room.self}
              online={room.online}
              watching={room.watching}
              notifications={room.notifications}
              size="xl"
            />
            <div className="flex flex-col ml-4">
              <p className="text-sm font-bold">{room.name}</p>
              <p className={messageClasses}>{room.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
