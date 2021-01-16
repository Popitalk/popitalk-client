import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
import Helmet from "react-helmet";
import ReactGa from "react-ga";
// Containers
import WelcomePage from "../containers/WelcomeView";
import Header from "../containers/Header";
import LeftPanel from "../containers/LeftPanel";
import RecommendedView from "../containers/RecommendedView";
import ModalManager from "../containers/Modals/ModalManager";
import ChatPanel from "../containers/ChatPanel";
import Channel from "../containers/Channel";
import CreateChannelContainer from "../containers/CreateChannelContainer";
import { getTopCategories } from "../redux";
// Components
import { PublicRoute, GeneralRoute, PrivateRoute } from "../components/Routers";
import NotFoundPage from "../components/NotFoundPage";
import PageLoader from "../components/PageLoader";
// Helpers
import strings from "../localization/strings";
import { ThemeProvider } from "../helpers/themeContext";
import { RouteWrapper } from "../helpers/routeWrapper";
// Redux
import { validateSession } from "../redux/actions";
// Styles
import "../styles/app.css";
import "../styles/scrollbars.css";
import "../helpers/initIcons";
import FriendsView from "../containers/FriendsView";

export default function App() {
  const dispatch = useDispatch();

  const validatedSession = useSelector(state => state.general.validatedSession);
  const { loggedIn, wsConnected } = useSelector(state => state.general);

  useEffect(() => {
    dispatch(validateSession());
    dispatch(getTopCategories());
  }, [dispatch]);
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGa.initialize("UA-175311766-1");
      //to report pageview
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const chatPanel = <ChatPanel />;
  const leftPanel = <LeftPanel />;

  if (!validatedSession || (loggedIn && !wsConnected))
    return (
      <ThemeProvider>
        <PageLoader />
      </ThemeProvider>
    );
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
              <RecommendedView />
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
              <FriendsView />
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
