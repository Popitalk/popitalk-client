import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useScroll } from "react-use";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory
} from "react-router-dom";
import VideoPanel from "../VideoPanel";
import UpdateQueue from "../UpdateQueue";
import "./RoomMain.css";

export default function RoomMain() {
  const match = useRouteMatch();
  const location = useLocation();
  const [shadow, setShadow] = useState(false);
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);

  useEffect(() => {
    if (y !== 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }, [y]);

  useLayoutEffect(() => {
    const tab = location.pathname.replace(match.url, "").slice(1);
    // const noScroll = location.state && location.state.noScroll;

    // if (noScroll) return;

    if (tab === "video") {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (tab === "queue") {
      scrollRef.current.scrollTo({ top: 0 });
    }
  }, [location, match.url]);

  return (
    <div className="RoomMain--container">
      <div
        className={`RoomMain--header${shadow ? " RoomMain--headerShadow" : ""}`}
      >
        <div>
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="room icon" />
          <h2>Team Playnow</h2>
        </div>
        <div className="RoomMain--nav">
          <Link
            to={`${match.url}/video`}
            className={`${
              location.pathname === `${match.url}/video`
                ? "RoomMain--active"
                : "RoomMain--inActive"
            }`}
          >
            <h4>Video</h4>
            <div className="RoomMain--nav--slab" />
          </Link>
          <Link
            to={`${match.url}/queue`}
            className={`${
              location.pathname === `${match.url}/queue`
                ? "RoomMain--active"
                : "RoomMain--inActive"
            }`}
          >
            <h4>Queue</h4>
            <div className="RoomMain--nav--slab" />
          </Link>
        </div>
      </div>
      <section ref={scrollRef}>
        <Switch>
          <Route exact path={`${match.path}/video`}>
            <VideoPanel />
          </Route>
          <Route path={`${match.path}/queue`}>
            <UpdateQueue />
          </Route>
        </Switch>
      </section>
    </div>
  );
}
