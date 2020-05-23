import React from "react";
import PropTypes from "prop-types";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Input.jsx";

function RecommendedChannels({ list }) {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <div className="w-1/5 m-auto">
        <Input
          variant="user"
          size="lg"
          value={search}
          placeholder="Search for a channel"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div>
        {list.map(item => (
          <VideoCardList
            key={item.id}
            videoList={item.channels}
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
