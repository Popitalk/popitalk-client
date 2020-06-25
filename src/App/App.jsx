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
import LeftPanel from "../containers/LeftPanel";
import RecommendedView from "../comp/RecommendedView";
import ChatPanel from "../containers/ChatPanel";
import AnonymousSidebar from "../comp/LeftPanels/AnonymousSidebar";
import CreateNewAccountContainer from "../containers/CreateNewAccountContainer";
import CreateChannelContainer from "../containers/CreateChannelContainer";
import { channelsList, friendsList } from "../stories/seed-arrays";
import Channel from "../containers/Channel/index";

export default function App() {
  const validatedSession = useSelector(state => state.general.validatedSession);
  const loggedIn = useSelector(state => state.general.loggedIn);
  const wsConnected = useSelector(state => state.general.wsConnected);
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

  const pageClasses = "w-full overflow-auto";
  const searchClasses = `${
    isCollapsed ? "block" : "hidden"
  } flex-grow md:block overflow-auto w-full`;

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
          <div className="flex flex-row h-full overflow-auto">
            <div className="flex-grow md:overflow-auto md:flex-shrink-0">
              {leftPanel}
            </div>
            <Route exact path="/create">
              <div className="flex justify-center p-5 bg-secondaryBackground w-full overflow-auto">
                <CreateChannelContainer />
              </div>
            </Route>
            <Route exact path="/channels/:channelId/video">
              {/* <div className={pageClasses}> */}
              <Channel tab="video" />
              {/* </div> */}
              {chatPanel}
            </Route>
            <Route exact path="/channels/:channelId/channel">
              {/* <div className={pageClasses}> */}
              <Channel tab="channel" />
              {/* </div> */}
              {chatPanel}
            </Route>

            <Route exact path="/channels/:channelId/queue">
              <div className={pageClasses}>
                <Channel tab="queue" />
              </div>
              {chatPanel}
            </Route>
            <Route exact path="/channels/:channelId/settings">
              <Channel tab="settings" />
            </Route>
            <Route exact path="/rooms/:roomId/video">
              <div className={pageClasses}>
                <Channel tab="video" type="room" />
              </div>
              {chatPanel}
            </Route>
            <Route exact path="/channels">
              <div className={searchClasses}>
                <RecommendedView list={channelsList} selectedPage="channels" />
              </div>
            </Route>
            <Route exact path="/friends">
              <div className={searchClasses}>
                <RecommendedView list={friendsList} selectedPage="friends" />
              </div>
            </Route>
            <Route exact path="/users/:userId">
              <UserPage />
            </Route>
          </div>
          <Redirect to="/channels" />
        </Switch>
      </div>
    </>
  );
}
