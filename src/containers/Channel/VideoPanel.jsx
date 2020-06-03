import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannel } from "../../redux/actions";
import VideoSection from "../../comp/VideoSection";
import QueueSection from "../../comp/QueueSection";

export default function VideoPanel({
  playlist,
  activeFriendViewers,
  classNames
}) {
  return (
    <div className={classNames}>
      <VideoSection
        {...playlist[0]}
        activeFriendViewers={activeFriendViewers}
      />
      <QueueSection queueList={playlist.slice(1)} />
    </div>
  );
}
