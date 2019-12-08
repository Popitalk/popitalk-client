import React from "react";
import "./Seperator.css";

export default function Seperator({ text }) {
  return (
    <div className="Seperator--container">
      <div />
      <p>{text}</p>
      <div />
    </div>
  );
}
