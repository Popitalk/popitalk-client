import React, { useState } from "react";
import SortableList from "./SortableList";
import arrayMove from "array-move";
import VideoMinimalQueueCard from "./VideoMinimalQueueCard";
import { testQueue } from "../stories/seed-arrays";

export default function ChannelListQueue({}) {
  const [items, setItems] = useState(testQueue);

  const handleChange = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const itemRenderer = (value) => (
    <VideoMinimalQueueCard {...value}/>
  );

  return (
    <SortableList items={items} itemRenderer={itemRenderer}
                  handlerChange={handleChange}><VideoMinimalQueueCard/></SortableList>
  );
};
