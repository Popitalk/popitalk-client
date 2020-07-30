import React from "react";
import PropTypes from "prop-types";
import VideoCard from "./VideoCard.jsx";

function VideoCardList({ videoList, isCollapsed, tabSelected }) {
  const currentVideoList = [];
  videoList.forEach(type => currentVideoList.push(...type.channels));

  return (
    <div className="mx-6 my-8">
      <div className="grid grid-cols-4 gap-3 w-full pb-5">
        {currentVideoList.map(video => (
          <VideoCard cardWidthClass="w-auto" key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}

VideoCardList.propTypes = {
  videoList: PropTypes.array
};

VideoCardList.defaultProps = {
  videoList: []
};

export default VideoCardList;
