import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";
import ChannelPost from "./ChannelPost";
import ChannelComment from "./ChannelComment";
import NewChannelComment from "./NewChannelComment";
import VideoSection from "./VideoSection";
import VideoChannelHeader from "./VideoChannelHeader";
import QueueSection from "./QueueSection";
import arrayMove from "array-move";
import ChannelDescription from "./ChannelDescription";
import NewChannelPost from "./NewChannelPost";
import ChannelChat from "./ChannelChat";
import VideoSearch from "./VideoSearch";

export default function ChannelVideo({
  id,
  posts,
  comments,
  name,
  icon,
  activeVideo,
  queue,
  adminList,
  description,
  type = "channel",
  trendingResults = [],
  searchResults = []
}) {
  const [queueList, setQueueList] = useState(queue);
  const handlerChange = ({ oldIndex, newIndex }) => {
    setQueueList(arrayMove(queueList, oldIndex, newIndex));
  };

  return (
    <div className="flex flex-col bg-secondaryBackground">
      <VideoChannelHeader
        id={id}
        name={name}
        icon={icon}
        videoStatus={
          activeVideo && activeVideo.status ? activeVideo.status : ""
        }
        type={type}
      />
      <VideoSection {...activeVideo} />
      <h2 className="text-2xl pt-4 px-3">Up Next</h2>
      <QueueSection queueList={queueList} handlerChange={handlerChange} />
      {type === "channel" && (
        <div className="mx-32 mt-40">
          <ChannelDescription
            id={id}
            icon={icon}
            name={name}
            adminList={adminList}
            description={description}
            status={activeVideo && activeVideo.status ? activeVideo.status : ""}
          />
          <NewChannelPost
            handleEmot={() => console.log("handle emot")}
            handleUploadImg={() => console.log("handle img upload")}
            handleSubmit={() => console.log("handle submit")}
            className="px-8 my-8"
          />
          <ChannelChat comments={comments} posts={posts} />
        </div>
      )}
      { type === "room" && (
              <VideoSearch trendingResults={trendingResults} searchResults={searchResults} threshold={3}/>

      )}
    </div>
  );
}
