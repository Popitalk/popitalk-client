import React, { useState } from "react";
import SortableList from "../SortableList";
import arrayMove from "array-move";
import VideoMinimalQueueCard from "../VideoMinimalQueueCard";

export default function ChannelListQueue({ playlist }) {
  const [items, setItems] = useState(playlist);

  const handleChange = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const itemRenderer = value => <VideoMinimalQueueCard {...value} />;

  return (
    <SortableList
      items={items}
      itemRenderer={itemRenderer}
      handlerChange={handleChange}
    >
      <VideoMinimalQueueCard />
    </SortableList>
  );
}
