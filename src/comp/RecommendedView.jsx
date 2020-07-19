import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import ChannelCardList from "./Channel/ChannelCardList.jsx";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Controls/Input.jsx";
import Button from "./Controls/Button";
import Alert from "../comp/Alert";

function RecommendedChannels({ list, selectedPage }) {
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const alert = useSelector(state => state.ui.alert);

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
    <div className="mt-4 mx-auto w-full max-w-screen-xl relative">
      {!!alert && (
        <Alert color="red" textColor="white" duration={3000}>
          {alert}
        </Alert>
      )}

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
