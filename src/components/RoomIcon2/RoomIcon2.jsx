import React from "react";
import classNames from "classnames";
import "./RoomIcon2.css";

export default function RoomIcon2({ images, online, watching, type }) {
  const classes = classNames({
    "RoomIcon2--container": true,
    "RoomIcon2--watching": true,
    "RoomIcon2--one": images.length === 1,
    "RoomIcon2--two": images.length === 2,
    "RoomIcon2--three": images.length === 3,
    "RoomIcon2--four": images.length >= 4,
    "RoomIcon2--ChannelsPanel1": type === "ChannelsPanel1",
    "RoomIcon2--FriendsPanel": type === "FriendsPanel"
  });

  if (images.length === 1) {
    return (
      <div className={classes}>
        <img src={images[0]} alt="icon" />
        {online && <div className="RoomIcon2--online" />}
      </div>
    );
  } else if (images.length === 2) {
    return (
      <div className={classes}>
        <img src={images[0]} alt="icon" />
        <img src={images[1]} alt="icon" />
        <div className="RoomIcon2--vertical" />
      </div>
    );
  } else if (images.length === 3) {
    return (
      <div className={classes}>
        <img src={images[0]} alt="icon" />
        <img src={images[1]} alt="icon" />
        <img src={images[2]} alt="icon" />
        <div className="RoomIcon2--vertical" />
        <div className="RoomIcon2--half" />
      </div>
    );
  } else if (images.length >= 4) {
    return (
      <div className={classes}>
        <img src={images[0]} alt="icon" />
        <img src={images[1]} alt="icon" />
        <img src={images[2]} alt="icon" />
        <img src={images[3]} alt="icon" />
        <div className="RoomIcon2--vertical" />
        <div className="RoomIcon2--horizontal" />
      </div>
    );
  }
}
