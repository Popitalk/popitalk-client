import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import LandingPage from "../routes/LandingPage";
import RoomPage from "../routes/RoomPage";
import ChannelPage from "../routes/ChannelPage";
import UserPage from "../routes/UserPage";
import Header from "../components/Header";
import LoadingPage from "../components/LoadingPage";
import ModalManager from "../components/ModalManager";
import { validateSession } from "../redux/actions";
import "@fortawesome/fontawesome-free/css/all.css";
import "./fw.css";
import "./App.css";

export default function App() {
  const { loggedIn, validatedSession } = useSelector(state => state.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateSession());
  }, [dispatch]);

  if (!validatedSession)
    return (
      <section className="App--container">
        <LoadingPage />
      </section>
    );

  return (
    <section className="App--container">
      <ModalManager />
      <Header />
      <Switch>
        {!loggedIn && (
          <Route exact path="/welcome">
            <LandingPage />
          </Route>
        )}
        {loggedIn && (
          <Route path="/rooms/:channelId">
            <RoomPage />
          </Route>
        )}
        {loggedIn && (
          <Route path="/channels/">
            <ChannelPage />
          </Route>
        )}
        {loggedIn && (
          <Route path="/users/:userId">
            <UserPage />
          </Route>
        )}
        <Route
          path="/"
          render={() =>
            loggedIn ? (
              <Redirect to="/channels/following" />
            ) : (
              <Redirect to="/welcome" />
            )
          }
        />
      </Switch>
    </section>
  );
}
