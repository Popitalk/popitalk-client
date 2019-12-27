import React from "react";
import "./LoadingPage.css";

export default function LoadingPage() {
  return (
    <div className="LoadingPage--container">
      <div className="LoadingPage--spinner">
        <div className="LoadingPage--spinner--circle">
          <div></div>
        </div>
      </div>
    </div>
  );
}
