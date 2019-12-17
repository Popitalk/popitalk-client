import React from "react";
import "./RoomIcon2.css";

export default function RoomIcon2({ images, online, watching }) {
  if (images.length === 1) {
    return (
      <div
        className={`RoomIcon2--container RoomIcon2--one${
          watching ? " RoomIcon2--watching" : ""
        }`}
      >
        <img src={images[0]} alt="icon" />
        {online && <div className="RoomIcon2--online" />}
      </div>
    );
  } else if (images.length === 2) {
    return (
      <div
        className={`RoomIcon2--container RoomIcon2--two${
          watching ? " RoomIcon2--watching" : ""
        }`}
      >
        <img src={images[0]} alt="icon" />
        <img src={images[1]} alt="icon" />
        <div className="RoomIcon2--vertical" />
      </div>
    );
  } else if (images.length === 3) {
    return (
      <div
        className={`RoomIcon2--container RoomIcon2--three${
          watching ? " RoomIcon2--watching" : ""
        }`}
      >
        <img src={images[0]} alt="icon" />
        <img src={images[1]} alt="icon" />
        <img src={images[2]} alt="icon" />
        <div className="RoomIcon2--vertical" />
        <div className="RoomIcon2--half" />
      </div>
    );
  } else if (images.length >= 4) {
    return (
      <div
        className={`RoomIcon2--container RoomIcon2--four${
          watching ? " RoomIcon2--watching" : ""
        }`}
      >
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
