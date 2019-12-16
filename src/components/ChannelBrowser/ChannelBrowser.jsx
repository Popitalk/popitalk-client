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
import "./ChannelBrowser.css";
import DiscoverPage from "../DiscoverPage";
import FollowingPage from "../FollowingPage";

export default function ChannelBrowser() {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const channelRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [shadow, setShadow] = useState(false);
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);

  useEffect(() => {
    // if (!mounted) return;

    if (y !== 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }

    // const tab = location.pathname.replace(match.url, "").slice(1);

    // if (tab === "video") {
    //   if (y >= channelRef.current.offsetTop) {
    //     history.push(`${match.url}/channel`, { noScroll: true });
    //   }
    // } else if (tab === "channel") {
    //   if (y < channelRef.current.offsetTop) {
    //     history.push(`${match.url}/video`, { noScroll: true });
    //   }
    // }
  }, [y]);

  useLayoutEffect(() => {
    const tab = location.pathname.replace(match.url, "").slice(1);
    // const noScroll = location.state && location.state.noScroll;

    // if (noScroll) return;

    if (tab === "following" || tab === "discover") {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [location, match.url]);

  return (
    <div className="ChannelBrowser--container">
      <div
        className={`ChannelBrowser--header${
          shadow ? " ChannelBrowser--headerShadow" : ""
        }`}
      >
        <Link
          to="/channels/following"
          className={`${
            match.path === "/channels/following"
              ? "ChannelBrowser--active"
              : "ChannelBrowser--inActive"
          }`}
        >
          <h4>Following</h4>
          <div className="ChannelBrowser--header--slab" />
        </Link>
        <Link
          to="/channels/discover"
          className={`${
            match.path === "/channels/discover"
              ? "ChannelBrowser--active"
              : "ChannelBrowser--inActive"
          }`}
        >
          <h4>Discover</h4>
          <div className="ChannelBrowser--header--slab" />
        </Link>
      </div>
      <section ref={scrollRef}>
        <Switch>
          <Route path="/channels/following">
            <FollowingPage />
          </Route>
          <Route path="/channels/discover">
            <DiscoverPage />
          </Route>
        </Switch>
      </section>
    </div>
  );
}
