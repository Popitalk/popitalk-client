import React, { useState } from "react";
import Button from "./Button";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function MiniFriendsList({ friends }) {
  return (
    <div className="w-full overflow-auto px-4">
      <div className="flex flex-grow justify-between">
        {friends.map(item => (
          <div key={item.id}>
            <AvatarIcon avatar={item.avatar} username={item.username} />
          </div>
        ))}
        <div className="px-1">
          <Button
            shape="circle"
            size="sm"
            icon="plus"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
