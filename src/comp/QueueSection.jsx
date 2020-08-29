import React from "react";
import VideoPanelCard from "./VideoPanelCard";
import SortableList from "./SortableList";

export default function QueueSection({
  queueList,
  handlerChange,
  handleSkip,
  handleDeleteVideo,
  displayControls
}) {
  const itemRenderer = value => (
    <VideoPanelCard
      {...value}
      handleSkip={handleSkip}
      handleDeleteVideo={() => handleDeleteVideo(value.id)}
      size="sm"
      className="mr-2"
      displayControls={displayControls}
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
      displayControls={displayControls}
    >
      <VideoPanelCard />
    </SortableList>
  );
}
