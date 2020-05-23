import React from "react";
import PropTypes from "prop-types";
import VideoCard from "./VideoCard.jsx";

function VideoCardList({ header, videoList }) {
  return (
    <div>
      <p className="text-base font-bold py-4">{header}</p>
      <div className="grid grid-cols-5 gap-4">
        {videoList.map(channel => (
          <VideoCard cardWidthClass="w-auto" key={channel.id} {...channel} />
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
