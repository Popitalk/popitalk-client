import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "react-use";
import VideoCard2 from "../VideoCard2";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
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
  const [firstShadeVisible, setFirstShadeVisible] = useState(false);
  const [secondShadeVisible, setSecondShadeVisible] = useState(true);
  // const scrollRef = useRef(null);
  // const { x } = useScroll(scrollRef);
  const match = useRouteMatch();
  const [items, setItems] = useState(videos);
  const [roomPage, setRoomPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/rooms")) {
      setRoomPage(true);
    } else {
      setRoomPage(false);
    }
  }, [location]);

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

  const handleAddVideo = () => {
    console.log("HKHKDSDS");
    // window.scrollTo({
    //   top: "120px",
    //   behavior: "smooth"
    // });
    // window.scrollTo(0, window.document.body.scrollHeight);
    window.scrollY(120);
  };

  return (
    <div className="VideoQueue2--container">
      {firstShadeVisible && <div className="VideoQueue2--firstShade" />}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`VideoQueue2--queue${
                snapshot.isDraggingOver ? " VideoQueue2--draggingOver" : ""
              }`}
              onScroll={e => {
                if (e.target.scrollLeft !== 0) {
                  setFirstShadeVisible(true);
                } else {
                  setFirstShadeVisible(false);
                }
                if (
                  e.target.scrollWidth - e.target.scrollLeft ===
                  e.target.offsetWidth
                ) {
                  setSecondShadeVisible(false);
                } else {
                  setSecondShadeVisible(true);
                }
              }}
            >
              <div>
                {items.map((video, index) => (
                  <Draggable
                    key={video.id}
                    draggableId={video.id}
                    index={index}
                  >
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
                              {/* <p>{roomPage ? "Add video" : "Edit queue"}</p> */}
                            </div>
                            <div className="VideoQueue2--editQueue--bottom">
                              <h6>Some Video</h6>
                              <p>Playnows | 50k users. Something New</p>
                            </div>
                            {roomPage ? (
                              <div
                                role="button"
                                type="button"
                                onClick={handleAddVideo}
                                className="button VideoQueue2--editQueue--button"
                              >
                                <i className="fas fa-plus fa-2x" />
                              </div>
                            ) : (
                              <Link
                                to={`${match.url.replace("video", "")}queue`}
                                type="button"
                                className="button VideoQueue2--editQueue--button"
                              >
                                <i className="fas fa-plus fa-2x" />
                              </Link>
                            )}
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
                              <h4 className="VideoCard2--live">Playing</h4>
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
                          <p {...provided.dragHandleProps}>Drag around</p>
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
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {secondShadeVisible && <div className="VideoQueue2--secondShade" />}
    </div>
  );
}
