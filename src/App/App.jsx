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
import ChannelVideo from "../comp/Channel/ChannelVideo";
import ChannelQueue from "../comp/Channel/ChannelQueue";
import ChannelSettingsPanel from "../comp/Channel/ChannelSettingsPanel";
import ChatPanel from "../comp/Chat/ChatPanel";
import ChannelForm from "../comp/Channel/ChannelForm";
import AnonymousSidebar from "../comp/AnonymousSidebar";
import CreateNewAccountContainer from "../containers/CreateNewAccountContainer";
import {
  testComments,
  testPosts,
  testQueue,
  testUserMinimal,
  testMessages,
  testResult,
  testChannels,
  testUsers,
  channelsList,
  friendsList,
  generateTestUsers
} from "../stories/seed-arrays";
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

  const generatedUsers = generateTestUsers();

  const chatPanel = (
    <div className="w-dropdown">
      <ChatPanel messages={testMessages} />
    </div>
  );

  const leftPanel = loggedIn ? (
    <LeftPanel />
  ) : (
    <CreateNewAccountContainer component={AnonymousSidebar} />
  );

  const searchClasses = "w-full bg-secondaryBackground overflow-auto";
  const pageClasses = "w-full overflow-auto";
  // const searchClasses = `${
  //   isCollapsed ? "block" : "hidden"
  // } flex-grow mt-10 mx-2 md:mx-10 md:block overflow-auto bg-secondaryBackground w-full`;

  return (
    <>
      <ModalManager />
      <div className="h-screen flex flex-col">
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
            <div className="flex-shrink-0 overflow-auto">{leftPanel}</div>
            <Route exact path="/create">
              <div className="flex justify-center p-5 bg-secondaryBackground w-full overflow-auto">
                <ChannelForm
                  initial={{
                    name: "",
                    description: "",
                    private: false,
                    icon: null,
                    category: ""
                  }}
                />
              </div>
            </Route>
            <Route
              exact
              path={[
                `/channels/:channelId/video`,
                `/channels/:channelId/channel`
              ]}
            >
              <div className={pageClasses}>
                <Channel tab="video" />
              </div>
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
                <ChannelVideo
                  id={123}
                  name="RoomOwner"
                  icon="https://i.imgur.com/xCGu56D.jpg"
                  activeFriendViewers={testUserMinimal}
                  activeVideo={{
                    ...testQueue[0],
                    status: "playing",
                    activeFriendViewers: testUserMinimal
                  }}
                  queue={testQueue}
                  type="room"
                  trendingResults={testResult}
                  searchResults={testResult}
                />
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
