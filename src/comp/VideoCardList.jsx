import React from "react";
import PropTypes from "prop-types";
import VideoCard from "./VideoCard.jsx";

function VideoCardList({ videoList, isCollapsed, chipSelected }) {
  if (chipSelected) {
    videoList = videoList.filter(type => type.title === chipSelected);
  }
  const currentVideoList = [];
  videoList.forEach(type => currentVideoList.push(...type.channels));
  return (
    <div className="mx-4 my-8">
      <div
        className={`grid ${
          isCollapsed ? "grid-cols-5 " : "grid-cols-4 "
        }gap-2 w-full pb-5`}
      >
        {currentVideoList.map(video => (
          <VideoCard cardWidthClass="w-auto" key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}

VideoCardList.propTypes = {
  header: PropTypes.string.isRequired,
  videoList: PropTypes.array
};

VideoCardList.defaultProps = {
  videoList: []
};

export default VideoCardList;
