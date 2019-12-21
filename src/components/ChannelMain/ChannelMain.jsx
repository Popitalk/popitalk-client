import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory
} from "react-router-dom";
import "./ChannelMain.css";
import VideoPanel from "../VideoPanel";
import Forum from "../Forum";
import UpdateChannel from "../UpdateChannel";
import UpdateQueue from "../UpdateQueue";

export default function ChannelMain() {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const channelRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   if (!mounted) {
  //     setMounted(true);
  //   }
  // }, [mounted]);

  // useEffect(() => {
  //   // if (!mounted) return;

  //   if (y !== 0) {
  //     setShadow(true);
  //   } else {
  //     setShadow(false);
  //   }

  //   // const tab = location.pathname.replace(match.url, "").slice(1);

  //   // if (tab === "video") {
  //   //   if (y >= channelRef.current.offsetTop) {
  //   //     history.push(`${match.url}/channel`, { noScroll: true });
  //   //   }
  //   // } else if (tab === "channel") {
  //   //   if (y < channelRef.current.offsetTop) {
  //   //     history.push(`${match.url}/video`, { noScroll: true });
  //   //   }
  //   // }
  // }, [y]);

  useLayoutEffect(() => {
    const tab = location.pathname.replace(match.url, "").slice(1);
    // const noScroll = location.state && location.state.noScroll;

    // if (noScroll) return;

    if (tab === "video") {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (tab === "channel") {
      scrollRef.current.scrollTo({
        top: channelRef.current.offsetTop + 6,
        behavior: "smooth"
      });
      // setMounted(true);
    } else if (tab === "settings" || tab === "queue") {
      scrollRef.current.scrollTo({ top: 0 });
    }
  }, [location, match.url]);

  return (
    <div className="ChannelMain--container">
      <div className="ChannelMain--header">
        <div>
          <img src="https://i.imgur.com/tLljw1z.jpg" alt="channel icon" />
          <h2>Team Playnow</h2>
        </div>
        <div className="ChannelMain--nav">
          <Link
            to={`${match.url}/video`}
            className={`${
              location.pathname === `${match.url}/video`
                ? "ChannelMain--active"
                : "ChannelMain--inActive"
            }`}
          >
            <h4>Video</h4>
            <div className="ChannelMain--nav--slab" />
          </Link>
          <Link
            to={`${match.url}/channel`}
            className={`${
              location.pathname === `${match.url}/channel`
                ? "ChannelMain--active"
                : "ChannelMain--inActive"
            }`}
          >
            <h4>Channel</h4>
            <div className="ChannelMain--nav--slab" />
          </Link>
          <Link
            to={`${match.url}/queue`}
            className={`${
              location.pathname === `${match.url}/queue`
                ? "ChannelMain--active"
                : "ChannelMain--inActive"
            }`}
          >
            <h4>Queue</h4>
            <div className="ChannelMain--nav--slab" />
          </Link>
          <Link
            to={`${match.url}/settings`}
            className={`${
              location.pathname === `${match.url}/settings`
                ? "ChannelMain--active"
                : "ChannelMain--inActive"
            }`}
          >
            <h4>Settings</h4>
            <div className="ChannelMain--nav--slab" />
          </Link>
        </div>
      </div>
      <section ref={scrollRef}>
        <Switch>
          <Route exact path={[`${match.path}/video`, `${match.path}/channel`]}>
            <VideoPanel />
            <div ref={channelRef} />
            <Forum />
          </Route>
          <Route path={`${match.path}/settings`}>
            <UpdateChannel />
          </Route>
          <Route path={`${match.path}/queue`}>
            <UpdateQueue />
          </Route>
        </Switch>
      </section>
    </div>
  );
}
