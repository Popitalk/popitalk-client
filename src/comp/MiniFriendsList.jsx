import React from "react";
import Button from "./Button";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function MiniFriendsList({
  friends,
  handleSelectRoom,
  handleFindFriends
}) {
  const finalFriends = friends.slice(0, 5);

  return (
    <div className="w-full overflow-auto px-4 pt-2 pb-2 select-none">
      <div className="flex flex-wrap flex-grow justify-between md:flex-no-wrap">
        {finalFriends.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 px-2px transition transform ease-in-out hover:scale-110 duration-100"
          >
            <AvatarIcon
              avatar={item.members[0].avatar}
              username={item.members[0].username}
              imageClick={() => handleSelectRoom(item.id)}
            />
          </div>
        ))}
        <div className="px-0 transition transform ease-in-out hover:scale-110 duration-100">
          <Button
            icon="user-plus"
            size="lg"
            background="secondary"
            onClick={handleFindFriends}
          />
        </div>
      </div>
    </div>
  );
}
