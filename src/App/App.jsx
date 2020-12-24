import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router";
import { Redirect } from "react-router-dom";
import Helmet from "react-helmet";

import { ThemeProvider } from "./ThemeContext";
import WelcomePage from "../containers/WelcomePage";
import Header from "../containers/Header";
import LeftPanel from "../containers/LeftPanel";
import RecommendedView from "../containers/RecommendedView";
import ModalManager from "../containers/Modals/ModalManager";
import ChatPanel from "../containers/ChatPanel";
import Channel from "../containers/Channel";
import CreateChannelContainer from "../containers/CreateChannelContainer";
import CreateNewAccountContainer from "../containers/CreateNewAccountContainer";
import ReactGa from "react-ga";
import logo from "../assets/logo.png";
import strings from "../helpers/localization";
import { validateSession } from "../redux/actions";
import { PublicRoute, GeneralRoute, PrivateRoute } from "../components/Routers";

import "../styles/app.css";
import "./App.css";
import "../helpers/initIcons";
import "../components/ScrollBars.css";

const RouteWrapper = ({ leftPanel, children }) => {
  return (
    <div className="flex flex-row h-full overflow-auto">
      <div className="flex-grow md:overflow-auto md:flex-shrink-0 w-auto mozilla-thin-scrollbar">
        {leftPanel}
      </div>
      {children}
    </div>
  );
};

export default function App() {
  const validatedSession = useSelector(state => state.general.validatedSession);
  const { loggedIn, wsConnected } = useSelector(state => state.general);

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(validateSession());
  }, [dispatch]);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGa.initialize("UA-175311766-1");

      //to report pageview
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  if (!validatedSession || (loggedIn && !wsConnected))
    return <section className="App--container" />;

  const chatPanel = (
    <div className="md:flex sm:w-dropdown // hidden">
      <ChatPanel />
    </div>
  );

  const viewer =
    pathname.includes("channels") ||
    pathname.includes("friends") ||
    pathname === "/";

  const leftPanel = (loggedIn || viewer) && <LeftPanel />;

  const searchClasses =
    "flex-grow block overflow-auto w-full mozilla-thin-scrollbar";

  return (
    <ThemeProvider>
      <ModalManager />
      <div className="h-screen flex flex-col bg-background-primary">
        <div className="h-auto">
          <Header />
        </div>
        <Switch>
          <PublicRoute exact path="/welcome">
            <div className="h-full overflow-y-auto">
              <CreateNewAccountContainer component={WelcomePage} />
            </div>
          </PublicRoute>
          <GeneralRoute exact path="/">
            <RouteWrapper leftPanel={leftPanel}>
              <div
                className={`rounded-md bg-background-secondary ${searchClasses}`}
              >
                <RecommendedView selectedPage="channels" />
              </div>
            </RouteWrapper>
          </GeneralRoute>
          <GeneralRoute exact path="/channels/:channelId/:tab">
            <RouteWrapper leftPanel={leftPanel}>
              <Channel chatPanel={chatPanel} />
            </RouteWrapper>
          </GeneralRoute>
          <GeneralRoute exact path="/friends">
            <RouteWrapper leftPanel={leftPanel}>
              <div
                className={`rounded-md bg-background-secondary ${searchClasses}`}
              >
                <RecommendedView selectedPage="channels" />
              </div>
            </RouteWrapper>
          </GeneralRoute>
          <PrivateRoute exact path="/create">
            <RouteWrapper leftPanel={leftPanel}>
              <div className="flex justify-center py-12 px-10 md:px-36 lg:px-48 bg-background-secondary w-full overflow-auto select-none">
                <CreateChannelContainer />
              </div>
            </RouteWrapper>
          </PrivateRoute>
          <PrivateRoute exact path="/rooms/:roomId/video">
            <RouteWrapper leftPanel={leftPanel}>
              <Channel chatPanel={chatPanel} />
            </RouteWrapper>
          </PrivateRoute>
          <PrivateRoute exact path="/users/:userId">
            <RouteWrapper leftPanel={leftPanel} />
          </PrivateRoute>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
      <Helmet>
        <meta charSet="UFT-8" />
        <title itemProp="name">{strings.mainTitle}</title>
        <meta name="description" content={strings.mainDescription} />
        <link rel="shortcut icon" href={logo} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={strings.mainKeywords} />
      </Helmet>
    </ThemeProvider>
  );
}
