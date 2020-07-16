import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import WelcomePage from "../routes/WelcomePage";
import UserPage from "../routes/UserPage";
import Header from "../containers/Header";
import LoadingPage from "../components/LoadingPage";
import ModalManager from "../containers/Modals/ModalManager";
import { validateSession } from "../redux/actions";
import "../styles/app.css";
import "./App.css";
import "../helpers/initIcons";
import withGetChannel from "../comp/withGetChannel";
import LeftPanel from "../containers/LeftPanel";
import RecommendedView from "../comp/RecommendedView";
import ChatPanel from "../containers/ChatPanel";
import AnonymousSidebar from "../comp/LeftPanels/AnonymousSidebar";
import CreateNewAccountContainer from "../containers/CreateNewAccountContainer";
import CreateChannelContainer from "../containers/CreateChannelContainer";
import { channelsList, friendsList } from "../stories/seed-arrays";
import Channel from "../containers/Channel";
import "../comp/ScrollBars.css";

const RouteWrapper = ({ leftPanel, children }) => {
  return (
    <div className="flex flex-row h-full overflow-auto">
      <div className="flex-grow md:overflow-auto md:flex-shrink-0 mozilla-thin-scrollbar">
        {leftPanel}
      </div>
      {children}
    </div>
  );
};

const ChannelRouteWrapper = withGetChannel(RouteWrapper);

export default function App() {
  const validatedSession = useSelector(state => state.general.validatedSession);
  const loggedIn = useSelector(state => state.general.loggedIn);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateSession());
  }, [dispatch]);

  if (!validatedSession)
    // if (!validatedSession)
    return (
      <section className="App--container">
        <LoadingPage />
      </section>
    );

  // if (!validatedSession || (loggedIn && !wsConnected))
  //   // if (!validatedSession)
  //   return (
  //     <section className="App--container">
  //       <LoadingPage />
  //     </section>
  //   );

  const chatPanel = (
    <div className="w-dropdown">
      <ChatPanel />
    </div>
  );

  const leftPanel = loggedIn ? (
    <LeftPanel />
  ) : (
    <CreateNewAccountContainer component={AnonymousSidebar} />
  );

  const searchClasses = `${
    isCollapsed ? "block" : "hidden"
  } flex-grow md:block overflow-auto w-full select-none mozilla-thin-scrollbar`;

  return (
    <>
      <ModalManager />
      <div className="h-screen flex flex-col bg-secondaryBackground">
        <div className="h-auto">
          <Header />
        </div>
        <Switch>
          <Route exact path="/welcome">
            <div className="h-full overflow-auto">
              <CreateNewAccountContainer component={WelcomePage} />
            </div>
          </Route>
          <Route exact path="/create">
            <RouteWrapper leftPanel={leftPanel}>
              <div className="flex justify-center py-12 lg:px-48 sm:px-8 bg-secondaryBackground w-full overflow-auto select-none">
                <CreateChannelContainer />
              </div>
            </RouteWrapper>
          </Route>
          <Route exact path="/channels/:channelId/video">
            <ChannelRouteWrapper leftPanel={leftPanel}>
              <Channel tab="video" />
              {chatPanel}
            </ChannelRouteWrapper>
          </Route>
          <Route exact path="/channels/:channelId/channel">
            <ChannelRouteWrapper leftPanel={leftPanel}>
              <Channel tab="channel" />
              {chatPanel}
            </ChannelRouteWrapper>
          </Route>
          <Route exact path="/channels/:channelId/queue">
            <ChannelRouteWrapper leftPanel={leftPanel}>
              <div className={searchClasses}>
                <Channel tab="queue" />
              </div>
              {chatPanel}
            </ChannelRouteWrapper>
          </Route>
          <Route exact path="/channels/:channelId/settings">
            <ChannelRouteWrapper leftPanel={leftPanel}>
              <Channel tab="settings" />
            </ChannelRouteWrapper>
          </Route>
          <Route exact path="/rooms/:roomId/video">
            <ChannelRouteWrapper leftPanel={leftPanel}>
              <div className={searchClasses}>
                <Channel tab="video" type="room" />
              </div>
              {chatPanel}
            </ChannelRouteWrapper>
          </Route>
          <Route exact path="/channels">
            <RouteWrapper leftPanel={leftPanel}>
              <div className={searchClasses}>
                <RecommendedView list={channelsList} selectedPage="channels" />
              </div>
            </RouteWrapper>
          </Route>
          <Route exact path="/friends">
            <RouteWrapper leftPanel={leftPanel}>
              <div className={searchClasses}>
                <RecommendedView list={friendsList} selectedPage="friends" />
              </div>
            </RouteWrapper>
          </Route>
          <Route exact path="/users/:userId">
            <RouteWrapper leftPanel={leftPanel}>
              <UserPage />
            </RouteWrapper>
          </Route>
          <Redirect to="/channels" />
        </Switch>
      </div>
    </>
  );
}
