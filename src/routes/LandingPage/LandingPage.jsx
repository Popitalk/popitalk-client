import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage--container">
      {/* <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>Paragraph</p>
      <span>Span</span>
      <input type="text" /> */}
      <button type="button" className="button">
        Follow
      </button>
      <button type="button" className="button lg">
        <i className="fas fa-plus" />
        <p>Create Channel</p>
      </button>
      <button type="button" className="button xl">
        <p>Your private room</p>
        <i className="fas fa-plus-square fa-2x" />
      </button>
      <button type="button" className="button pill sm">
        Copy
      </button>
      <button type="button" className="button pill">
        Log In
      </button>
      <button type="button" className="button pill lg bgc-gradient1">
        CREATE ROOM
      </button>
      <button type="button" className="button pill lg bgc-gradient2">
        SIGN UP
      </button>
      <button type="button" className="button pill lg">
        Continue
      </button>
      <button type="button" className="button round">
        <i className="fas fa-search" />
      </button>
      <button type="button" className="button round bgc-secondary lg">
        <i className="fas fa-search fa-2x" />
      </button>
      <button type="button" className="button round lg">
        <i className="fas fa-plus-square fa-2x" />
      </button>
      <button type="button" className="button round">
        <i className="fas fa-plus" />
      </button>
      {/* <a href="https://google.com">google</a>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <textarea name="a" cols="30" rows="10" /> */}
    </div>
  );
}
