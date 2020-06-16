import React from "react";
import Button from "./Button";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function MiniFriendsList({
  friends,
  handleSelectRoom,
  handleFindFriends
}) {
  const finalFriends = friends.filter(f => f.type === "friend").slice(0, 5);

  return (
    <div className="w-full overflow-auto px-4 pt-2">
      <div className="flex flex-wrap flex-grow justify-between md:flex-no-wrap">
        {finalFriends.map(item => (
          <div key={item.id} className="flex-shrink-0 px-2px">
            <AvatarIcon
              avatar={item.members[0].avatar}
              username={item.members[0].username}
              imageClick={() => handleSelectRoom(item.id)}
            />
          </div>
        ))}
        <div className="px-0">
          <Button
            icon="user-plus"
            size="lg"
            background="search"
            onClick={handleFindFriends}
          />
        </div>
      </div>
    </div>
  );
}
