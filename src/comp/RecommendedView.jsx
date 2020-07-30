import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ChannelCardList from "./Channel/ChannelCardList.jsx";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Controls/Input.jsx";
import Alert from "../comp/Alert";

function RecommendedChannels({ list, selectedPage }) {
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const alert = useSelector(state => state.ui.alert);

  const [tabSelected, setTab] = useState("# following");
  const tabs = [
    { tab: "# following" },
    { tab: "# discover" },
    { tab: "# trending" }
  ];

  const [search, setSearch] = useState("");
  return (
    <div className="relative my-4 mx-auto w-full max-w-screen-xl">
      <div className="fixed mx-2 -my-4 z-50">
        {!!alert && <Alert duration={3000}>{alert}</Alert>}
      </div>
      <div className="w-auto mx-2 pt-6 sm:mx-auto m-auto sm:w-2/3">
        <Input
          variant="channel"
          size="md"
          value={search}
          placeholder={
            selectedPage === "channels"
              ? "Search for a channel"
              : "Search for a video"
          }
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* OPTION TABS */}
      <div className="flex justify-start px-6 mt-8 h-8 space-x-2">
        {tabs.map((img, idx) => {
          return (
            <button
              key={idx}
              className={`flex flex-row items-center text-secondaryText font-bold h-full px-4 shadow-sm bg-primaryBackground focus:outline-none transition transform ease-in-out hover:scale-105 duration-100 rounded-full ${
                tabSelected === img.tab
                  ? "rainbow-text shadow-none"
                  : "text-secondaryText"
              }`}
              onClick={() => setTab(img.tab)}
            >
              <p>{img.tab}</p>
            </button>
          );
        })}
      </div>
      {/* CARDS */}
      {selectedPage === "channels" ? (
        <ChannelCardList
          channelList={list}
          isCollapsed={isCollapsed}
          tabSelected={tabSelected}
        />
      ) : (
        selectedPage === "friends" && (
          <VideoCardList
            videoList={list}
            isCollapsed={isCollapsed}
            tabSelected={tabSelected}
          />
        )
      )}
    </div>
  );
}

RecommendedChannels.propTypes = {
  list: PropTypes.array
};
RecommendedChannels.defaultProps = {
  list: []
};
export default RecommendedChannels;
