import React, { useState } from "react";
import Button from "./Button";
import FriendUsersList from "./InfoCardLists/FriendUsersList";
import Input from "./Input";

export default function FriendsPanel({ userSearchResults, ...rest }) {
  const [search, setSearch] = useState("");

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-primaryBackground max-w-sm py-4 pr-4 pl-4">
      <div className="flex items-center mb-4">
        <h3 className="text-3xl font-bold mr-auto">Friends</h3>
      </div>
      <div className="px-4">
        <Input
          variant="user"
          size="lg"
          value={search}
          placeholder="Search friends"
          onChange={e => setSearch(e.target.value)}
        />
        <div className="space-x-1 pl-1 pt-1">
          <span className="font-light text-xs">Searching:</span>
          <span className="font-light text-xs">{search}</span>
          <span
            role="button"
            className="text-xs no-underline font-medium cursor-pointer text-highlightText"
            onClick={() => setSearch("")}
          >
            Clear
          </span>
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
      <Button size="md" leftIcon="plus" className="">
        New Room
      </Button>
    </div>
  );
}
