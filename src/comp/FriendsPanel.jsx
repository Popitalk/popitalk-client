import React, { useState } from "react";
import Button from "./Button";
import FriendUsersList from "./InfoCardLists/FriendUsersList";
import Input from "./Input";
import RoomsList from "./InfoCardLists/RoomsList";

export default function FriendsPanel({ userSearchResults, roomsResults, ...rest }) {
  const [search, setSearch] = useState("");

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-primaryBackground max-w-sm py-4 pr-4 pl-4">
      <div className="flex flex-grow items-center justify-between mb-4 mx-2">
        <h3 className="text-2xl font-bold btn-playing">Channels</h3>
        <h3 className="text-3xl font-bold btn-playing">Friends</h3>
      </div>
      <div className="px-4">
        <Input
          variant="user"
          size="lg"
          value={search}
          placeholder="Search friends"
          onChange={e => setSearch(e.target.value)}
        />
        <div className="space-x-1 flex justify-between pl-1 pt-1">
          <div>
            <span className="font-light text-xs">Searching:</span>
            <span className="font-light text-xs">{search}</span>
          </div>
          <div>
            <span
              role="button"
              className="text-xs no-underline font-medium cursor-pointer text-highlightText"
              onClick={() => setSearch("")}
            >
            Clear
          </span>
          </div>

        </div>
      </div>

      <FriendUsersList
        users={userSearchResults.slice(activeIndex * 3, activeIndex * 3 + 3)}
        {...rest}
      />
      <div className="flex justify-end px-4 space-x-5 text-xs font-bold">
        {[0, 1, 2].map(idx => (
          <span
            key={idx}
            role="button"
            onClick={() => setActiveIndex(idx)}
            className={`${
              activeIndex === idx ? "text-black" : "text-highlightText"
            } no-underline`}
          >
            {idx}
          </span>
        ))}
      </div>
      <div className="my-4">
        <RoomsList rooms={roomsResults}/>
      </div>
      <Button size="md" leftIcon="plus" className="float-right">
        New Room
      </Button>
      <div className="clearfix"/>
    </div>
  );
}
