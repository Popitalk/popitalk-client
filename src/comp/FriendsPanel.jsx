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
    <div className="w-full my-12 bg-primaryBackground py-4 px-2 md:max-w-sm">
      <div className="hidden items-center justify-between px-4 w-full mb-4 md:flex">
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
      <div className="shadow-md py-2 px-4 border-top-none rounded-md">
        <div className="space-x-1 flex  justify-between pl-1 pt-1">
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
