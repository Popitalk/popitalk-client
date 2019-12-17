import React from "react";
import "./TestPage.css";
import ChannelsPanel1 from "../../components/ChannelsPanel1";
import FriendsPanel1 from "../../components/FriendsPanel1";
import RoomIcon2 from "../../components/RoomIcon2";

export default function TestPage() {
  return (
    <div className="TestPage--container">
      <div className="xyz">
        <div className="FriendsPanel2--searchbar">
          <input
            type="text"
            placeholder="Search friends"
            // value={search}
            // onChange={e => setSearch(e.target.value)}
            maxLength={30}
          />
          <div>
            <button
              type="button"
              className="button round"
              // onClick={handleSearchSelect}
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
