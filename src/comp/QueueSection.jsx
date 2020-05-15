import React from "react";
import VideoPanelCard from "./VideoPanelCard";
import SortableList from "./SortableList";

export default function QueueSection({ queueList, handlerChange }) {
  const itemRenderer = value => <VideoPanelCard {...value} />;

  return (
    <SortableList
      axis={"x"}
      items={queueList}
      itemRenderer={itemRenderer}
      handlerChange={handlerChange}
      height={"100%"}
      className={"cursor-move"}
    ></SortableList>
  );
}
