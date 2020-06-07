import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannel } from "../../redux/actions";
import VideoSection from "../../comp/VideoSection";
import QueueSection from "../../comp/QueueSection";
import arrayMove from "array-move";

export default function VideoPanel({
  playlist,
  activeFriendViewers,
  classNames
}) {
  const [queueList, setQueueList] = useState(playlist.slice(1));
  const handlerChange = ({ oldIndex, newIndex }) => {
    setQueueList(arrayMove(queueList, oldIndex, newIndex));
  };
  return (
    <div className={classNames}>
      <VideoSection
        {...playlist[0]}
        activeFriendViewers={activeFriendViewers}
      />
      <QueueSection queueList={queueList} handlerChange={handlerChange} />
    </div>
  );
}
