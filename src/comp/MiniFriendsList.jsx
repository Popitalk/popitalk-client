import React from "react";
import Button from "./Controls/Button";
import RoomIcon from "./Controls/RoomIcon";

export default function MiniFriendsList({
  friends,
  handleSelectRoom,
  handleFindFriends,
  room
}) {
  const finalFriends = friends.slice(0, 4);

  return (
    <div className="flex flex-row items-center md:flex-no-wrap w-auto px-2 select-none overflow-hidden">
      {finalFriends.map(room => {
        const images = room.members.map(m => m.avatar);
        const name = room.members.map(m => " " + m.username).join();
        const roomIcon = (
          <RoomIcon
            images={images}
            self={room.type === "self"}
            online={room.online}
            watching={room.watching}
            notifications={room.notifications}
            size="lg"
            tooltip={name}
            tooltipPlace="bottom"
          />
        );
        return (
          <Button
            styleNone
            key={room.id}
            styleNoneContent={roomIcon}
            className="rounded-circle py-2 px-2px focus:outline-none"
            onClickEvent={() => handleSelectRoom(room.id)}
            analyticsString="Room Icon Button: MiniFriendsList"
          />
        );
      })}
      <div className="px-1">
        <Button
          actionButton
          icon="user-plus"
          size="md"
          background="primary"
          onClickEvent={handleFindFriends}
          className="hover:scale-110"
          tooltip="Add Friends"
          analyticsString="Add Friend Button: MiniFriendsList"
        />
      </div>
    </div>
  );
}
