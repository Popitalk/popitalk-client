import React from "react";
import SortableList from "./SortableList";
import VideoCardVerticalPlaylist from "../ThumbnailCards/VideoCardVerticalPlaylist";

export default function ChannelListQueue({
  playlist,
  handleChange,
  handleDeleteVideo,
  handleFindMore
}) {
  const itemRenderer = value => (
    <VideoCardVerticalPlaylist
      {...value}
      handleRemove={() => handleDeleteVideo(value.id)}
    />
  );

  return (
    <SortableList
      items={playlist}
      itemRenderer={itemRenderer}
      handlerChange={handleChange}
      distance={1}
    >
      <VideoCardVerticalPlaylist handleFindMore={handleFindMore} />
    </SortableList>
  );
}
