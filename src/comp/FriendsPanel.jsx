import React, { useState } from "react";
import Button from "./Button";
import FriendUsersList from "./InfoCardLists/FriendUsersList";
import StretchList from "./InfoCardLists/StretchList";
import Input from "./Input";
import RoomsList from "./InfoCardLists/RoomsList";

export default function FriendsPanel({
  userSearchResults,
  roomsResults,
  ...rest
}) {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full px-2 py-4 my-12 md:my-0 bg-primaryBackground md:max-w-sm">
      <div className="items-center justify-between hidden w-full px-4 mb-4 md:flex">
        <h3 className="text-2xl font-bold btn-playing">Channels</h3>
        <h3 className="text-3xl font-bold btn-playing">Friends</h3>
      </div>
      <Input
        variant="user"
        size="lg"
        value={search}
        placeholder="Search friends"
        onChange={e => setSearch(e.target.value)}
      />
      <div className="px-4 py-2 rounded-md shadow-md border-top-none">
        <div className="flex justify-between pt-1 pl-1 space-x-1">
          <div>
            <span className="text-xs font-light">Searching:</span>
            <span className="text-xs font-light">{search}</span>
          </div>
          <div>
            <span
              role="button"
              className="text-xs font-medium no-underline cursor-pointer text-highlightText"
              onClick={() => setSearch("")}
            >
              Clear
            </span>
          </div>
        </div>
        <div className="flex w-full h-64">
          <StretchList
            list={FriendUsersList}
            users={userSearchResults}
            {...rest}
          />
        </div>
      </div>

      <div className="my-4">
        <RoomsList rooms={roomsResults} />
      </div>
      <Button size="md" leftIcon="plus" className="float-right">
        New Room
      </Button>
      <div className="clearfix" />
    </div>
  );
}
