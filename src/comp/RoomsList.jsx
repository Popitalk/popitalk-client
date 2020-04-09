import React from "react";
import classnames from "classnames";
import RoomIcon from "./RoomIcon";

export default function RoomsList({ rooms, selected, handleSelect }) {
  const baseRoomClasses =
    "flex flex-row items-center justify-end p-2 bg-primaryBackground hover:bg-secondaryBackground rounded-lg cursor-pointer";
  return (
    <div className="children:not-first:mt-1">
      {rooms.map(room => {
        const roomClasses = classnames(baseRoomClasses, {
          "bg-secondaryBackground cursor-default": selected === room.id
        });
        const messageClasses = classnames(" mt-2", {
          "text-secondaryText": !room.notifications,
          "text-primaryText font-bold": room.notifications
        });

        return (
          <div
            key={room.id}
            className={roomClasses}
            role="button"
            onClick={() => handleSelect(room.id)}
          >
            <div className="flex flex-col items-end mr-4">
              <p className="text-lg font-bold">{room.name}</p>
              <p className={messageClasses}>{room.message}</p>
            </div>
            <RoomIcon
              images={room.images}
              self={room.self}
              online={room.online}
              watching={room.watching}
              notifications={room.notifications}
              size="xl"
            />
          </div>
        );
      })}
    </div>
  );
}
