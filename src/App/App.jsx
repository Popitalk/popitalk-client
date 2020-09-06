import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import WelcomePage from "../containers/WelcomePage";
import Header from "../containers/Header";
import ModalManager from "../containers/Modals/ModalManager";
import { validateSession } from "../redux/actions";
import "../styles/app.css";
import "./App.css";
import "../helpers/initIcons";
import LeftPanel from "../containers/LeftPanel";
import RecommendedView from "../containers/RecommendedView";
import ChatPanel from "../containers/ChatPanel";
import AnonymousSidebar from "../components/LeftPanels/AnonymousSidebar";
import CreateNewAccountContainer from "../containers/CreateNewAccountContainer";
import CreateChannelContainer from "../containers/CreateChannelContainer";
import Channel from "../containers/Channel";
import "../components/ScrollBars.css";
import ReactGa from "react-ga";
import Helmet from "react-helmet";

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
  const { loggedIn } = useSelector(state => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateSession());
  }, [dispatch]);

  useEffect(() => {
    ReactGa.initialize("UA-175311766-1");

    //to report pageview
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  if (!validatedSession) return <section className="App--container" />;

  // if (!validatedSession || (loggedIn && !wsConnected))
  //   return <section className="App--container">loading spinner</section>;

  const chatPanel = (
    <div className="md:flex sm:w-dropdown // hidden">
      <ChatPanel />
    </div>
  );

  const leftPanel = loggedIn ? (
    <LeftPanel />
  ) : (
    <CreateNewAccountContainer component={AnonymousSidebar} />
  );

  const searchClasses =
    "flex-grow block overflow-auto w-full mozilla-thin-scrollbar";

  return (
    <>
      <Helmet>
        <meta charSet="UFT-8" />
        <title>Popitalk - Watch Together!</title>
        <meta
          name="description"
          content="Popitalk is exactly what you need with your friends to watch together. We believe in making texting more fun and enjoyable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <ModalManager />
      <div className="h-screen flex flex-col bg-primaryBackground">
        <div className="h-auto">
          <Header />
        </div>
        <Switch>
          {!loggedIn && (
            <>
              <Route exact path="/welcome">
                <div className="h-full overflow-y-auto">
                  <CreateNewAccountContainer component={WelcomePage} />
                </div>
              </Route>
              <Redirect to="/welcome" />
            </>
          )}
          <Route exact path="/create">
            <RouteWrapper leftPanel={leftPanel}>
              <div className="flex justify-center py-12 px-10 md:px-36 lg:px-48 bg-secondaryBackground w-full overflow-auto select-none">
                <CreateChannelContainer />
              </div>
            </RouteWrapper>
          </Route>
          <Route
            exact
            path={["/channels/:channelId/:tab", "/rooms/:roomId/video"]}
          >
            <RouteWrapper leftPanel={leftPanel}>
              <Channel chatPanel={chatPanel} />
            </RouteWrapper>
          </Route>
          <Route exact path="/channels">
            <RouteWrapper leftPanel={leftPanel}>
              <div
                className={`rounded-md bg-secondaryBackground ${searchClasses}`}
              >
                <RecommendedView selectedPage="channels" />
              </div>
            </RouteWrapper>
          </Route>
          <Route exact path="/friends">
            <RouteWrapper leftPanel={leftPanel}>
              <div
                className={`rounded-md bg-secondaryBackground ${searchClasses}`}
              >
                <RecommendedView selectedPage="channels" />
              </div>
            </RouteWrapper>
          </Route>
          <Route exact path="/users/:userId">
            <RouteWrapper leftPanel={leftPanel} />
          </Route>
          <Redirect to="/channels" />
        </Switch>
      </div>
    </>
  );
}
