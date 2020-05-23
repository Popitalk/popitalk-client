import React from "react";
import PropTypes from "prop-types";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Input.jsx";

function RecommendedVideos({ list }) {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <div className="w-1/5 m-auto">
        <Input
          variant="user"
          size="lg"
          value={search}
          placeholder="Search for a video"
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

RecommendedVideos.propTypes = {
  list: PropTypes.array
};
RecommendedVideos.defaultProps = {
  list: []
};
export default RecommendedVideos;
