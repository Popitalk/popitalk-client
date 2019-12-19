import React from "react";
import "./TestPage.css";
import RoomIcon2 from "../../components/RoomIcon2";

export default function TestPage() {
  return (
    <div className="TestPage--container">
      <div className="xyz">
        <div className="sb">
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
