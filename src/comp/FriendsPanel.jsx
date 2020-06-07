import React, { useState } from "react";
import Button from "./Button";
import FriendUsersList from "./InfoCardLists/FriendUsersList";
import StretchList from "./InfoCardLists/StretchList";
import Input from "./Input";
import RoomsList from "./InfoCardLists/RoomsList";
import PanelHeader from "./PanelHeader";

export default function FriendsPanel({
  userSearchResults,
  roomsResults,
  updateSelectedPage,
  handleCollapse,
  selectedPage,
  ...rest
}) {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full h-screen px-2 pt-2 bg-primaryBackground md:w-84">
      <PanelHeader
        handleCollapse={handleCollapse}
        updateSelectedPage={updateSelectedPage}
        selectedPage={selectedPage}
      />
      <Input
        variant="user"
        size="sm"
        value={search}
        placeholder="Search with username"
        onChange={e => setSearch(e.target.value)}
      />
      <div className="px-2 rounded-lg shadow-2xl">
        <div className="flex justify-between p-1 space-x-1">
          <div>
            <span className="text-xs">Results for </span>
            <span className="text-xs font-bold">{search}</span>
          </div>
          <div>
            <span
              role="button"
              className="text-xs font-semibold no-underline cursor-pointer text-highlightText"
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
