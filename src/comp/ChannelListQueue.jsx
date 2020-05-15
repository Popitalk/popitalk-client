import React, { useState } from "react";
import SortableList from "./SortableList";
import arrayMove from "array-move";
import VideoMinimalQueueCard from "./VideoMinimalQueueCard";

export default function ChannelListQueue() {
  const [items, setItems] = useState([
    {
      status: "playing",
      statusMessage: "playing",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2019)"
    },
    {
      status: "queued",
      statusMessage: "In 14 min",
      duration: "10m 20s",
      title: "Live João Cleber"
    },
    {
      status: "queued",
      statusMessage: "In 24 min",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2017)"
    },
    {
      status: "queued",
      statusMessage: "In 24 min",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2017)"
    },
    {
      status: "queued",
      statusMessage: "In 24 min",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2017)"
    },
    {
      status: "queued",
      statusMessage: "In 24 min",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2017)"
    },
    {
      status: "queued",
      statusMessage: "In 24 min",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2017)"
    },
    {
      status: "queued",
      statusMessage: "In 24 min",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2017)"
    },
    {
      status: "queued",
      statusMessage: "In 24 min",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2017)"
    },
    {
      status: "queued",
      statusMessage: "In 24 min",
      duration: "10m 20s",
      title: "Week 4 Day 1 | LCS Spring Split (2017)"
    }
  ]);

  const handleChange = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const itemRenderer = value => <VideoMinimalQueueCard {...value} />;

  return (
    <SortableList
      items={items}
      itemRenderer={itemRenderer}
      handlerChange={handleChange}
    />
  );
}
