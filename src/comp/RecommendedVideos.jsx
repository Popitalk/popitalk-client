import React from "react";
import PropTypes from "prop-types";
import VideoCardList from "./VideoCardList.jsx";
import Input from "./Controls/Input.jsx";

function RecommendedVideos({ list }) {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <div className="w-auto m-auto mx-2 bg-white sm:mx-auto sm:w-2/3">
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
