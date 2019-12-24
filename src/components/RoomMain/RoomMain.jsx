import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback
} from "react";
import { useDispatch } from "react-redux";
import { openFollowersModal } from "../../redux/actions";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import VideoPanel from "../VideoPanel";
import UpdateQueue from "../UpdateQueue";
import "./RoomMain.css";

export default function RoomMain() {
  const dispatch = useDispatch();
  const openFollowersModalDispatcher = useCallback(
    () => dispatch(openFollowersModal()),
    [dispatch]
  );
  const match = useRouteMatch();
  const location = useLocation();
  const scrollRef = useRef(null);

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
      <div className="RoomMain--header">
        <div>
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="room icon" />
          <h3>Team Playnow</h3>
          <i className="fas fa-pen fa-lg" />
          {/* <p onClick={openFollowersModalDispatcher}>120 People</p> */}
        </div>
        {/* <div className="RoomMain--nav">
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
        </div> */}
      </div>
      <section ref={scrollRef}>
        <VideoPanel />
        {/* <Switch>
          <Route exact path={`${match.path}/video`}>
            <VideoPanel />
          </Route>
          <Route path={`${match.path}/queue`}>
            <UpdateQueue />
          </Route>
        </Switch> */}
      </section>
    </div>
  );
}
