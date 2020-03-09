import React from "react";
import YoutubeLogo from "../../assets/youtube-logo.png";
import "./VideoCard1.css";
import Button1 from "../Button1";

export default function VideoCard1({
  id,
  source,
  name,
  thumbnail,
  uploadDate,
  duration,
  views,
  handleAdd
}) {
  let sourceImage;
  if (source === "youtube") sourceImage = YoutubeLogo;

  return (
    <div className="VideoCard1--container">
      <div className="VideoCard1--top">
        <img src={thumbnail} alt="video" />
        <img src={sourceImage} alt="youtube" />
      </div>
      <div className="VideoCard1--bottom">
        <h6>{name}</h6>
        <p>
          {views}. {uploadDate}
        </p>
      </div>
      <div className="VideoCard1--shade">
        <Button1 pill size="lg" onClick={() => handleAdd(id)}>
          Add to queue
        </Button1>
      </div>
    </div>
  );
}
