import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router";
import { Redirect } from "react-router-dom";
import Helmet from "react-helmet";

import { ThemeProvider } from "../helpers/themeContext";
import { RouteWrapper } from "../helpers/routeWrapper";
import WelcomePage from "../containers/WelcomePage";
import Header from "../containers/Header";
import LeftPanel from "../containers/LeftPanel";
import RecommendedView from "../containers/RecommendedView";
import ModalManager from "../containers/Modals/ModalManager";
import ChatPanel from "../containers/ChatPanel";
import Channel from "../containers/Channel";
import CreateChannelContainer from "../containers/CreateChannelContainer";
import ReactGa from "react-ga";
import logo from "../assets/logo.png";
import strings from "../helpers/localization";
import { validateSession } from "../redux/actions";
import { getCategories } from "../redux";
import { PublicRoute, GeneralRoute, PrivateRoute } from "../components/Routers";

import "../styles/app.css";
import "./App.css";
import "../helpers/initIcons";
import "../components/ScrollBars.css";
import Button from "../components/Controls/Button";

export default function App() {
  const validatedSession = useSelector(state => state.general.validatedSession);
  const { loggedIn, wsConnected } = useSelector(state => state.general);

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [viewersPanelExpanded, setViewersPanelExpanded] = useState(false);

  useEffect(() => {
    dispatch(validateSession());
    dispatch(getCategories({ alreadySelected: [] }));
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

  const viewer =
    pathname.includes("channels") ||
    pathname.includes("friends") ||
    pathname === "/";

  const chatPanel = <ChatPanel hideLeftPanel={viewersPanelExpanded} />;
  const hideLeftPanelButton = (
    <Button
      hoverable
      styleNone
      icon={viewersPanelExpanded === true ? "times" : "bars"}
      styleNoneIconClassName="text-lg"
      className="ml-4 z-30 sm:hidden flex items-center justify-center text-copy-secondary w-12 h-12 hover:text-copy-highlight mr-4"
      analyticsString="Collapse Button: PanelHeader"
      onClick={() => setViewersPanelExpanded(!viewersPanelExpanded)}
    />
  );
  const hideLeftPanelButtonClicked = () => {
    setViewersPanelExpanded(false);
  };
  const leftPanel = (loggedIn || viewer) && (
    <LeftPanel
      hideLeftPanel={viewersPanelExpanded}
      hideLeftPanelButtonClicked={() => hideLeftPanelButtonClicked()}
    />
  );

  return (
    <ThemeProvider>
      <ModalManager />
      <div className="h-screen flex flex-col bg-background-primary">
        <Header hideLeftPanelButton={hideLeftPanelButton} />
        <Switch>
          <PublicRoute exact path="/welcome">
            <WelcomePage />
          </PublicRoute>
          <GeneralRoute exact path="/">
            <RouteWrapper leftPanel={leftPanel}>
              <RecommendedView
                selectedPage="channels"
                hideLeftPanel={viewersPanelExpanded}
              />
            </RouteWrapper>
          </GeneralRoute>
          <GeneralRoute exact path={`/channels/:channelId`}>
            <RouteWrapper leftPanel={leftPanel}>
              <Channel
                chatPanel={chatPanel}
                hideLeftPanel={viewersPanelExpanded}
              />
            </RouteWrapper>
          </GeneralRoute>
          <GeneralRoute exact path={`/channels/:channelId/:tab`}>
            <RouteWrapper leftPanel={leftPanel}>
              <Channel
                chatPanel={chatPanel}
                hideLeftPanel={viewersPanelExpanded}
              />
            </RouteWrapper>
          </GeneralRoute>
          <GeneralRoute exact path="/friends">
            <RouteWrapper leftPanel={leftPanel}>
              <RecommendedView
                selectedPage="channels"
                hideLeftPanel={viewersPanelExpanded}
              />
            </RouteWrapper>
          </GeneralRoute>
          <PrivateRoute exact path="/create">
            <RouteWrapper leftPanel={leftPanel}>
              <CreateChannelContainer hideLeftPanel={viewersPanelExpanded} />
            </RouteWrapper>
          </PrivateRoute>
          <PrivateRoute exact path="/rooms/:roomId">
            <RouteWrapper leftPanel={leftPanel}>
              <Channel
                chatPanel={chatPanel}
                hideLeftPanel={viewersPanelExpanded}
              />
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
