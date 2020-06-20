import React from "react";
import PropTypes from "prop-types";
import VideoCard from "./VideoCard.jsx";

function VideoCardList({ header, videoList, isCollapsed }) {
  return (
    <div className="mx-4 my-8">
      <div
        className={`grid ${
          isCollapsed ? "grid-cols-5 " : "grid-cols-4 "
        }gap-2 w-full pb-5`}
      >
        {videoList.map(video => (
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
