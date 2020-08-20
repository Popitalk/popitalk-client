import React from "react";
import VideoPanelCard from "./VideoPanelCard";
import SortableList from "./SortableList";

export default function QueueSection({
  queueList,
  handlerChange,
  handleSkip,
  handleDeleteVideo
}) {
  const itemRenderer = value => (
    <VideoPanelCard
      {...value}
      handleSkip={handleSkip}
      handleDeleteVideo={() => handleDeleteVideo(value.id)}
    />
  );

  return (
    <SortableList
      axis={"x"}
      items={queueList}
      itemRenderer={itemRenderer}
      handlerChange={handlerChange}
      height={"100%"}
      className={"cursor-move"}
      distance={1}
    >
      <VideoPanelCard />
    </SortableList>
  );
}
