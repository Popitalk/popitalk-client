import React, { useState } from "react";
import {
  Redirect,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";
import "./ChannelBrowser.css";
import Input5 from "../Input5";
import ChannelCard from "../ChannelCard";
import DiscoverPage from "../DiscoverPage";
import FollowingPage from "../FollowingPage";

export default function ChannelBrowser() {
  const match = useRouteMatch();
  const location = useLocation();

  return (
    <div className="ChannelBrowser--container">
      <div className="ChannelBrowser--header">
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
      <Switch>
        <Route path="/channels/following">
          <FollowingPage />
        </Route>
        <Route path="/channels/discover">
          <DiscoverPage />
        </Route>
      </Switch>
    </div>
  );
}
