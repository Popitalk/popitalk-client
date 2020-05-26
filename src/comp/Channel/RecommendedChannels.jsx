import React from "react";
import PropTypes from "prop-types";
import ChannelCardList from "./ChannelCardList.jsx";
import Input from "../Input.jsx";

function RecommendedChannels({ list }) {
  const [search, setSearch] = React.useState("");
  return (
    <div className="mt-5">
      <div className="w-auto mx-2 sm:mx-auto m-auto bg-white sm:w-2/3">
        <Input
          variant="channel"
          size="lg"
          value={search}
          placeholder="Search for a channel"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div>
        {list.map(item => (
          <ChannelCardList
            key={item.id}
            channelList={item.channels}
            header={item.title}
          />
        ))}
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
