import React from "react";
import VideoPanelCard from "./VideoPanelCard";
import SortableList from "./SortableList";

export default function QueueSection({
  queueList,
  handlerChange,
  handleDeleteVideo
}) {
  const itemRenderer = value => (
    <VideoPanelCard {...value} handleDeleteVideo={handleDeleteVideo} />
  );

  return (
    <SortableList
      axis={"x"}
      items={queueList}
      itemRenderer={itemRenderer}
      handlerChange={handlerChange}
      height={"100%"}
      className={"cursor-move"}
    >
      <VideoPanelCard />
    </SortableList>
  );
}
