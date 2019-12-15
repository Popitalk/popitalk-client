import React, { useState, useEffect } from "react";
import VideoCard2 from "../VideoCard2";
import YoutubeLogo from "../../assets/youtube-logo.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./VideoQueue2.css";

const videos = [
  // {
  //   id: "abc1",
  //   image: "https://i.imgur.com/tLljw1z.jpg",
  //   title: "Week 4 Day 1 | LCS Spring Split (2019)",
  //   other: "LoL Esports | 60K views. 2 months ago"
  // },
  {
    id: "abc2",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "1111111",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc3",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "2222222",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc4",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "3333333",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc5",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "4444444",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc6",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "5555555",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc7",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "6666666",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "abc8",
    image: "https://i.imgur.com/tLljw1z.jpg",
    title: "7777777",
    other: "LoL Esports | 60K views. 2 months ago"
  },
  {
    id: "editQueue"
  }
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function VideoQueue2({ changeQueue }) {
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

    setItems(newItems);
  };

  return (
    <div className="VideoQueue2--container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`VideoQueue2--queue${
                snapshot.isDraggingOver ? " VideoQueue2--draggingOver" : ""
              }`}
            >
              {items.map((video, index) => (
                <Draggable key={video.id} draggableId={video.id} index={index}>
                  {(provided, snapshot) => {
                    if (video.id === "editQueue")
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="VideoQueue2--editQueue"
                        >
                          <div className="VideoQueue2--editQueue--top">
                            <p>Edit queue</p>
                          </div>
                          <div className="VideoQueue2--editQueue--bottom">
                            <h6>Some Video</h6>
                            <p>Playnows | 50k users. Something New</p>
                          </div>
                          <button
                            type="button"
                            className="button"
                            onClick={changeQueue}
                          >
                            <i className="fas fa-plus fa-2x" />
                          </button>
                        </div>
                      );
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`VideoCard2--container${
                          snapshot.isDragging ? " VideoCard2--dragged" : ""
                        }`}
                      >
                        <div className="VideoCard2--top">
                          {index === 0 ? (
                            <h4 className="VideoCard2--live">Live</h4>
                          ) : (
                            <h4>In 12min</h4>
                          )}
                          <img
                            src={video.image}
                            alt="video"
                            className="VideoCard2--videoImage"
                          />
                          <img
                            src={YoutubeLogo}
                            alt="youtube"
                            className="VideoCard2--sourceImage"
                          />
                        </div>
                        <div className="VideoCard2--bottom">
                          <h6>{video.title}</h6>
                          <p>{video.other}</p>
                        </div>
                        <div
                          className="VideoCard2--shade"
                          {...provided.dragHandleProps}
                        />
                        <p>Drag around</p>
                        <button type="button" className="button pill">
                          Remove
                        </button>
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
