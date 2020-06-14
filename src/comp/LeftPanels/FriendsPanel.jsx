import React, { useState } from "react";
import Button from "../Button";
import FriendUsersList from "../InfoCardLists/FriendUsersList";
import StretchList from "../InfoCardLists/StretchList";
import Input from "../Input";
import RoomsList from "../InfoCardLists/RoomsList";
import PanelHeader from "./PanelHeader";

export default function FriendsPanel({
  userSearchResults,
  handleSearch,
  initialRooms,
  updateSelectedPage,
  handleCollapse,
  selectedPage,
  handleAccept,
  handleReject,
  handleProfile,
  selectedRoom,
  handleSelectRoom
}) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState(initialRooms);
  const [refresh, setRefresh] = useState(0);

  const syncSearch = search => {
    search = search.trim();
    setSearch(search);
    handleSearch(search);

    if (!open && search.length > 0) {
      // Force the rooms list to recalculate its height from 0
      setRefresh(refresh + 1);
    }

    setOpen(search.length > 0);

    const filterRooms = initialRooms.filter(room => {
      return room.members.some(member =>
        member.username.toLowerCase().includes(search.toLowerCase())
      );
    });

    setRooms(filterRooms);
  };

  return (
    <div className="w-full h-full flex flex-col bg-primaryBackground xl:w-84 lg:w-84 md:w-84 sm:w-84">
      <PanelHeader
        handleCollapse={handleCollapse}
        updateSelectedPage={updateSelectedPage}
        selectedPage={selectedPage}
      />
      <div className="">
        <div className="mt-2 mx-4">
          <Input
            variant="user"
            size="sm"
            value={search}
            placeholder="Search with username"
            onChange={e => setSearch(e.target.value)}
            onClick={() => syncSearch(search)}
          />
        </div>
        {open && (
          <div className="rounded-lg bg-secondaryBackground shadow-inner mx-2 mt-2">
            <div className="flex justify-between px-3 py-1 space-x-1">
              <div>
                <span className="text-xs">Results for </span>
                <span className="text-xs font-bold">{search}</span>
              </div>
              <div>
                <span
                  role="button"
                  className="text-xs font-semibold no-underline cursor-pointer text-highlightText"
                  onClick={() => syncSearch("")}
                >
                  Close
                </span>
              </div>
            </div>
            <div className="flex w-full h-64">
              <StretchList
                list={FriendUsersList}
                users={userSearchResults}
                handleAccept={handleAccept}
                handleReject={handleReject}
                handleProfile={handleProfile}
              />
            </div>
          </div>
        )}
        <div className="bg-primaryBackground h-full px-2 pt-2">
          <RoomsList
            rooms={rooms}
            selected={selectedRoom}
            handleSelect={handleSelectRoom}
            fullHeigth={true}
          />
        </div>
        <Button
          size="md"
          leftIcon="plus"
          className="fixed bottom-0 left-0 ml-44 mb-4"
        >
          New Room
        </Button>
      </div>
    </div>
  );
}
