import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./VideoQueue1.css";

const videos = [
  {
    id: "abc1",
    title: "Week 4 Day 1 | LCS Spring Split (2019)",
    duration: "39m 12s"
  },
  {
    id: "abc2",
    title: "Week 4 Day 1 | LCS Spring Split (2019)",
    duration: "1h 39m 12s"
  },
  {
    id: "abc3",
    title: "xxxxxxx",
    duration: "1h 39m 12s"
  },
  {
    id: "abc4",
    title: "yyyyyyy",
    duration: "1h 39m 12s"
  },
  {
    id: "abc5",
    title: "zzzzzzz",
    duration: "1h 39m 12s"
  }
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function VideoQueue1() {
  const [items, setItems] = useState(videos);

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    // console.log("OLD", items);
    // console.log("OLD", newItems);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="VideoQueue1--container"
          >
            {items.map((video, index) => (
              <Draggable key={video.id} draggableId={video.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`VideoQueue1--video${
                      snapshot.isDragging ? " VideoQueue1--video--dragging" : ""
                    }`}
                    {...provided.dragHandleProps}
                  >
                    <div>
                      <i className="fas fa-bars" />
                      <p className="VideoQueue1--position">#{index + 1}</p>
                      {index === 0 ? (
                        <div className="VideoQueue1--time VideoQueue1--live">
                          <p>Playing</p>
                        </div>
                      ) : (
                        <div className="VideoQueue1--time">
                          <p>In 39min</p>
                        </div>
                      )}
                      <p className="VideoQueue1--title">{video.title}</p>
                    </div>
                    <div>
                      <p className="VideoQueue1--duration">{video.duration}</p>
                      <button type="button" className="button pill sm">
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
