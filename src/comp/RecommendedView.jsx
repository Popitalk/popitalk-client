import React, { useState } from "react";
import PropTypes from "prop-types";
import ChannelCardList from "./Channel/ChannelCardList.jsx";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Input.jsx";
import { useSelector } from "react-redux";
import Button from "./Button";

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
          size="lg"
          value={search}
          placeholder={
            selectedPage === "channels"
              ? "Search for a channel"
              : "Search for a video"
          }
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-center my-3">
        <Button
          leftIcon="search"
          className="uppercase mr-3 bg-white"
          shape="chip"
          color="#E5E5E5"
          background="bgColor"
          selectedColor={chipSelected === "following" && "button"}
          onClick={() => onChipClick("following")}
        >
          following
        </Button>
        <Button
          leftIcon="search"
          className="uppercase mr-3"
          shape="chip"
          background="bgColor"
          selectedColor={chipSelected === "recommended" && "button"}
          onClick={() => onChipClick("recommended")}
        >
          recommended
        </Button>
        <Button
          leftIcon="search"
          className="uppercase"
          shape="chip"
          background="bgColor"
          selectedColor={chipSelected === "hot" && "cancel"}
          onClick={() => onChipClick("hot")}
        >
          hot
        </Button>
      </div>
      <div className="mt-2">
        {list.map(item => {
          if (selectedPage === "channels") {
            return (
              <ChannelCardList
                key={item.id}
                channelList={item.channels}
                header={item.title}
                isCollapsed={isCollapsed}
              />
            );
          } else if (selectedPage === "friends") {
            return (
              <VideoCardList
                key={item.id}
                videoList={item.channels}
                header={item.title}
                isCollapsed={isCollapsed}
              />
            );
          }
        })}
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
