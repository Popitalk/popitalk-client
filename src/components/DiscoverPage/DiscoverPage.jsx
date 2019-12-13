import React, { useState } from "react";
import ChannelCard1 from "../ChannelCard1";
import Input5 from "../Input5";
import "./DiscoverPage.css";

export default function DiscoverPage() {
  const [search, setSearch] = useState("");
  const [discoverTab, setDiscoverTab] = useState("popular");

  const handleSubmit = () => {
    setSearch("");
  };
  return (
    <div className="DiscoverPage--container">
      <h1>Find new channels on Playnows!</h1>
      <Input5
        placeholder="Try searching for a show, or a game, or an artist"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            handleSubmit();
          }
        }}
        onClick={handleSubmit}
        maxLength={120}
      />
      <div className="DiscoverPage--searchResults">
        <h3>20 results for &quot;Andrew&quot;</h3>
        <div className="DiscoverPage--channels">
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
        </div>
        <div className="DiscoverPage--searchResults--button">
          <button type="button" className="button pill">
            More
          </button>
        </div>
      </div>
      <div className="DiscoverPage--recommended">
        <h3>Recommended</h3>
        <div className="DiscoverPage--recommended--nav">
          <button
            type="button"
            className={`button${
              discoverTab === "popular"
                ? " DiscoverPage--activeTab"
                : " DiscoverPage--inactiveTab"
            }`}
            onClick={() => setDiscoverTab("popular")}
          >
            Most Popular
          </button>
          <button
            type="button"
            className={`button${
              discoverTab === "friends"
                ? " DiscoverPage--activeTab"
                : " DiscoverPage--inactiveTab"
            }`}
            onClick={() => setDiscoverTab("friends")}
          >
            Friends
          </button>
          <button
            type="button"
            className={`button${
              discoverTab === "recent"
                ? " DiscoverPage--activeTab"
                : " DiscoverPage--inactiveTab"
            }`}
            onClick={() => setDiscoverTab("recent")}
          >
            Recent
          </button>
        </div>
        <div className="DiscoverPage--channels">
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
          <ChannelCard1 />
        </div>
      </div>
    </div>
  );
}
