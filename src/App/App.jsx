import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router";
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
import NotFoundPage from "../components/NotFoundPage";
import PageLoader from "../components/PageLoader";
import CreateChannelContainer from "../containers/CreateChannelContainer";
import ReactGa from "react-ga";
import strings from "../helpers/localization";
import { validateSession } from "../redux/actions";
import { PublicRoute, GeneralRoute, PrivateRoute } from "../components/Routers";

import "../styles/app.css";
import "../helpers/initIcons";
import "../components/ScrollBars.css";

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

  if (!validatedSession || (loggedIn && !wsConnected)) return <PageLoader />;

  const viewer =
    pathname.includes("channels") ||
    pathname.includes("friends") ||
    pathname === "/";

  const chatPanel = <ChatPanel />;
  const leftPanel = (loggedIn || viewer) && <LeftPanel />;

  return (
    <ThemeProvider>
      <ModalManager />
      <div className="h-screen flex flex-col">
        <Header />
        <Switch>
          <PublicRoute exact path="/welcome">
            <WelcomePage />
          </PublicRoute>
          <GeneralRoute exact path="/">
            <RouteWrapper leftPanel={leftPanel}>
              <RecommendedView selectedPage="channels" />
            </RouteWrapper>
          </GeneralRoute>
          <GeneralRoute exact path={`/channels/:channelId`}>
            <RouteWrapper leftPanel={leftPanel}>
              <Channel chatPanel={chatPanel} />
            </RouteWrapper>
          </GeneralRoute>
          <GeneralRoute exact path={`/channels/:channelId/:tab`}>
            <RouteWrapper leftPanel={leftPanel}>
              <Channel chatPanel={chatPanel} />
            </RouteWrapper>
          </GeneralRoute>
          <GeneralRoute exact path="/friends">
            <RouteWrapper leftPanel={leftPanel}>
              <RecommendedView selectedPage="channels" />
            </RouteWrapper>
          </GeneralRoute>
          <PrivateRoute exact path="/create">
            <RouteWrapper leftPanel={leftPanel}>
              <CreateChannelContainer />
            </RouteWrapper>
          </PrivateRoute>
          <PrivateRoute exact path="/rooms/:roomId">
            <RouteWrapper leftPanel={leftPanel}>
              <Channel chatPanel={chatPanel} />
            </RouteWrapper>
          </PrivateRoute>
          <PrivateRoute exact path="/users/:userId">
            <RouteWrapper leftPanel={leftPanel} />
          </PrivateRoute>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
      <Helmet>
        <meta charSet="UFT-8" />
        <title itemProp="name">{strings.mainTitle}</title>
        <meta name="description" content={strings.mainDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={strings.mainKeywords} />
      </Helmet>
    </ThemeProvider>
  );
}
