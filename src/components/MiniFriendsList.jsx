import React from "react";
import Button from "./Controls/Button";
import RoomIcon from "./Controls/RoomIcon";
import { channelHasNewMessage } from "../util/channelHasNewMessage";

export default function MiniFriendsList({
  friends,
  handleSelectRoom,
  isLoading
}) {
  const finalFriends = friends.slice(0, 4);

  return (
    <div className="flex flex-row items-center justify-evenly w-full select-none py-2 px-4 space-x-3">
      {finalFriends.map(room => {
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
            isLoading={isLoading}
            displayName={name}
          />
        );
        return (
          <Button
            styleNone
            hoverable
            key={room.id}
            styleNoneContent={roomIcon}
            className="rounded-circle px-2px focus:outline-none text-copy-primary"
            onClick={() => handleSelectRoom(room.id)}
            analyticsString="Room Icon Button: MiniFriendsList"
          />
        );
      })}
    </div>
  );
}
