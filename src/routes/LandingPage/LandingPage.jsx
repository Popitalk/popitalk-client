import React from "react";
import "./LandingPage.css";
import Input1 from "../../components/Input1";
import Input2 from "../../components/Input2";
import Input3 from "../../components/Input3";
import Input4 from "../../components/Input4";

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

      <div className="inputs">
        <Input1
          type="text"
          header="Username or email"
          autoFocus
          spellCheck={false}
        />
        <Input1
          type="password"
          header="Password"
          autoFocus
          spellCheck={false}
        />
        <Input3
          type="text"
          header="Password"
          autoFocus
          spellCheck={false}
          placeholder="Search"
        />
        <Input3
          type="text"
          header="Password"
          autoFocus
          spellCheck={false}
          placeholder="Search"
          friends={true}
        />
        <Input4
          type="text"
          header="Channel Name"
          spellCheck={false}
          placeholder="Name your channel"
          maxLength="6"
        />
      </div>
      <div className="inputs2">
        <div className="inputs2-half">
          <Input2
            type="text"
            autoFocus
            spellCheck={false}
            placeholder="First name"
          />
          <Input2
            type="text"
            autoFocus
            spellCheck={false}
            placeholder="Last name"
          />
        </div>
        <Input2 type="text" autoFocus spellCheck={false} placeholder="Email" />
        <Input2
          type="text"
          autoFocus
          spellCheck={false}
          placeholder="Pick a Username (e.g user123)"
        />
      </div>
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
      {/* <button type="button" className="button pill lg bgc-gradient1">
        CREATE ROOM
      </button>
      <button type="button" className="button pill lg bgc-gradient2">
        SIGN UP
      </button> */}
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
