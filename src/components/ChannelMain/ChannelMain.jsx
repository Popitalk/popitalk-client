import React, { useState, useEffect } from "react";
// import { Switch, Route } from "react-router";
import {
  Redirect,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";
import "./ChannelMain.css";
import VideoPanel from "../VideoPanel";
import Forum from "../Forum";
import UpdateChannel from "../UpdateChannel";

export default function ChannelMain() {
  const match = useRouteMatch();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    // console.log("MMMM", location);
    // if(location.pathname === `${match.url}/video`){
    //   setPage("video");
    // } else if (location.pathname === `${match.url}/channel`){
    //   setPage("video");
    // }
  }, [location]);

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <Switch>
        <Route exact path={[`${match.path}/video`, `${match.path}/channel`]}>
          <VideoPanel />
          <div className="ChannelMain--back">
            <button type="button" className="button pill" onClick={handleBack}>
              <i className="far fa-arrow-alt-circle-up fa-lg" />
              <p>Back to video</p>
            </button>
          </div>
          <Forum />
        </Route>
        <Route path={`${match.path}/settings`}>
          <UpdateChannel />
        </Route>
      </Switch>
    </div>
  );
}
