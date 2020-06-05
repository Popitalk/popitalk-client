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
import LeftPanel from "../comp/LeftPanel";
import RecommendedChannels from "../comp/RecommendedView";
import ChannelVideo from "../comp/Channel/ChannelVideo";
import ChannelQueue from "../comp/Channel/ChannelQueue";
import ChannelSettingsPanel from "../comp/Channel/ChannelSettingsPanel";
import ChatPanel from "../comp/Chat/ChatPanel";
import AnonymousSidebar from "../comp/AnonymousSidebar";
import {
  testComments,
  testPosts,
  testQueue,
  testUserMinimal,
  testMessages,
  testResult,
  testChannels,
  testUsers
} from "../stories/seed-arrays";

export default function App() {
  const validatedSession = useSelector(state => state.general.validatedSession);
  const loggedIn = useSelector(state => state.general.loggedIn);
  const wsConnected = useSelector(state => state.general.wsConnected);
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
      <ChatPanel messages={testMessages} />
    </div>
  );

  const leftPanel = loggedIn ? (
    <LeftPanel channels={testChannels} friends={testUsers} />
  ) : (
    <AnonymousSidebar />
  );

  return (
    <section className="App--container">
      <ModalManager />
      <Header />
      <Switch>
        <Route exact path="/welcome">
          <WelcomePage />
        </Route>
        <div className="flex">
          {leftPanel}
          <Route path="/channels/:channelId/video">
            <ChannelVideo
              id={123}
              name="Channel #1"
              icon="https://i.imgur.com/xCGu56D.jpg"
              activeFriendViewers={testUserMinimal}
              activeVideo={{
                ...testQueue[0],
                status: "playing",
                activeFriendViewers: testUserMinimal
              }}
              queue={testQueue}
              adminList={testUserMinimal}
              description="Test"
              comments={testComments}
              posts={testPosts}
            />
            {chatPanel}
          </Route>
          <Route path="/channels/:channelId/queue">
            <ChannelQueue
              id={123}
              name="Channel #1"
              icon="https://i.imgur.com/xCGu56D.jpg"
              trendingResults={testResult}
              searchResults={testResult}
              activeVideo={testQueue[0]}
              queue={testQueue}
            />
            {chatPanel}
          </Route>
          <Route path="/channels/:channelId/settings">
            <ChannelSettingsPanel
              followers={testUsers}
              admins={testUsers}
              bannedUsers={testUsers}
              initialChannelForm={{
                name: "",
                description: "",
                private: false,
                icon: null,
                category: ""
              }}
            />
          </Route>
          <Route path="/rooms/:roomId/video">
            <ChannelVideo
              id={123}
              name="Channel #1"
              icon="https://i.imgur.com/xCGu56D.jpg"
              activeFriendViewers={testUserMinimal}
              activeVideo={{
                ...testQueue[0],
                status: "playing",
                activeFriendViewers: testUserMinimal
              }}
              queue={testQueue}
              adminList={testUserMinimal}
              description="Test"
              comments={testComments}
              posts={testPosts}
            />
            {chatPanel}
          </Route>
          <Route exact path="/">
            <RecommendedChannels />
          </Route>
          <Route path="/users/:userId">
            <UserPage />
          </Route>
        </div>
      </Switch>
    </section>
  );
}
