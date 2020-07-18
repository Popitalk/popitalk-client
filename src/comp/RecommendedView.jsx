import React, { useState } from "react";
import PropTypes from "prop-types";
import ChannelCardList from "./Channel/ChannelCardList.jsx";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Controls/Input.jsx";
import { useSelector } from "react-redux";
import Button from "./Controls/Button";

function RecommendedChannels({ list, selectedPage }) {
  const isCollapsed = useSelector(state => state.ui.isCollapsed);

  const [chipSelected, setChipSelected] = useState("");
  const onChipClick = title => {
    if (chipSelected === title) {
      setChipSelected("");
    } else {
      setChipSelected(title);
    }
  };

  const [search, setSearch] = useState("");
  return (
    <div className="mt-10 mx-auto w-full max-w-screen-xl">
      <div className="w-auto mx-2 sm:mx-auto m-auto bg-white sm:w-2/3">
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
      <div className="flex justify-center my-4 h-10">
        <Button
          leftIcon="bell"
          className="uppercase mr-4 shadow-xs hover:shadow-none focus:shadow-none bg-secondaryBackground space-x-2"
          shape="chip"
          background="bgColor"
          selectedColor={chipSelected === "following" && "primary"}
          onClick={() => onChipClick("following")}
          size="sm"
        >
          following
        </Button>
        <Button
          leftIcon="globe"
          className="uppercase mr-4 shadow-xs hover:shadow-none focus:shadow-none bg-secondaryBackground space-x-2"
          shape="chip"
          background="bgColor"
          selectedColor={chipSelected === "discover" && "secondary"}
          onClick={() => onChipClick("discover")}
          size="sm"
        >
          discover
        </Button>
        <Button
          leftIcon="heart"
          className="uppercase shadow-xs hover:shadow-none focus:shadow-none bg-secondaryBackground space-x-2"
          shape="chip"
          background="bgColor"
          selectedColor={chipSelected === "trending" && "cancel"}
          onClick={() => onChipClick("trending")}
          size="sm"
        >
          trending
        </Button>
      </div>
      <div className="mt-2">
        {selectedPage === "channels" ? (
          <ChannelCardList
            channelList={list}
            isCollapsed={isCollapsed}
            chipSelected={chipSelected}
          />
        ) : (
          selectedPage === "friends" && (
            <VideoCardList
              videoList={list}
              isCollapsed={isCollapsed}
              chipSelected={chipSelected}
            />
          )
        )}
      </div>
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
