import React, { useState } from "react";
import Button from "./Button";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function MiniFriendsList({ friends }) {
  return (
    <div className="w-full overflow-auto px-4 pt-2">
      <div className="flex flex-wrap flex-grow justify-between md:flex-no-wrap">
        {friends.map(item => (
          <div key={item.id} className="flex-shrink-0 px-2px">
            <AvatarIcon avatar={item.avatar} username={item.username} />
          </div>
        ))}
        <div className="px-0">
          <Button icon="user-plus" size="lg" background="search" />
        </div>
      </div>
    </div>
  );
}
