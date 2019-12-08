import React from "react";
import "./RoomIcon.css";

export default function RoomIcon({ images, online, watching }) {
  if (images.length === 1) {
    return (
      <div
        className={`RoomIcon--container RoomIcon--one${
          watching ? " RoomIcon--watching" : ""
        }`}
      >
        <div className="RoomIcon--full">
          <img src={images[0]} alt="icon" />
        </div>
        <div className="RoomIcon--back" />
        {online && <div className="RoomIcon--online" />}
      </div>
    );
  }
  if (images.length === 2) {
    return (
      <div
        className={`RoomIcon--container RoomIcon--two${
          watching ? " RoomIcon--watching" : ""
        }`}
      >
        <div className="RoomIcon--left">
          <img src={images[0]} alt="icon" />
        </div>
        <div className="RoomIcon--right">
          <img src={images[1]} alt="icon" />
        </div>
        <div className="RoomIcon--back" />
        <div className="RoomIcon--vertical" />
      </div>
    );
  }
  if (images.length === 3) {
    return (
      <div
        className={`RoomIcon--container RoomIcon--three${
          watching ? " RoomIcon--watching" : ""
        }`}
      >
        <div className="RoomIcon--left">
          <img src={images[0]} alt="icon" />
        </div>
        <div className="RoomIcon--topRight">
          <img src={images[1]} alt="icon" />
        </div>
        <div className="RoomIcon--bottomRight">
          <img src={images[2]} alt="icon" />
        </div>
        <div className="RoomIcon--back" />
        <div className="RoomIcon--vertical" />
        <div className="RoomIcon--horizontalRight" />
      </div>
    );
  }
  if (images.length >= 4) {
    return (
      <div
        className={`RoomIcon--container RoomIcon--four${
          watching ? " RoomIcon--watching" : ""
        }`}
      >
        <div className="RoomIcon--topLeft">
          <img src={images[0]} alt="icon" />
        </div>
        <div className="RoomIcon--topRight">
          <img src={images[1]} alt="icon" />
        </div>
        <div className="RoomIcon--bottomLeft">
          <img src={images[2]} alt="icon" />
        </div>
        <div className="RoomIcon--bottomRight">
          <img src={images[3]} alt="icon" />
        </div>
        <div className="RoomIcon--back" />
        <div className="RoomIcon--vertical" />
        <div className="RoomIcon--horizontal" />
      </div>
    );
  }
}
