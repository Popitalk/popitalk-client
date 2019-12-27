import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import LandingPage from "../routes/LandingPage";
import RoomPage from "../routes/RoomPage";
import ChannelPage from "../routes/ChannelPage";
import UserPage from "../routes/UserPage";
import Header from "../components/Header";
import ModalManager from "../components/ModalManager";
import { validateSession } from "../redux/actions";
import "@fortawesome/fontawesome-free/css/all.css";
import "./fw.css";
import "./App.css";

export default function App() {
  const loggedIn = useSelector(({ userState }) => Boolean(userState.id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateSession());
  }, [dispatch]);

  return (
    <section className="App--container">
      <ModalManager />
      <Header />
      <Switch>
        <Route
          exact
          path="/welcome"
          render={() =>
            loggedIn ? <Redirect to="/channels/following" /> : <LandingPage />
          }
        />
        {loggedIn && (
          <>
            <Route path="/rooms/:roomId">
              <RoomPage />
            </Route>
            <Route path="/channels/">
              <ChannelPage />
            </Route>
            <Route path="/users/">
              <UserPage />
            </Route>
          </>
        )}

        {loggedIn ? (
          <Route
            path="/"
            render={() => <Redirect to="/channels/following" />}
          />
        ) : (
          <Route path="/" render={() => <Redirect to="/welcome" />} />
        )}
      </Switch>
    </section>
  );
}
