import React, { useState } from "react";
import LeftPanel from "../comp/LeftPanel";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleLeftPanel
  // setLeftPanelActiveTabChannels,
  // setLeftPanelActiveTabFriends
} from "../redux/actions";
import { Switch, Route } from "react-router";
import history from "../history";

export default function LeftPanelContainer() {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedPage, setSelectedPage] = useState("channels");
  const channels = useSelector(state => state.channels);
  const friends = useSelector(state => state.relationships.friends);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  // const activeTab = useSelector(state => state.ui.leftPanelActiveTab);
  const dispatch = useDispatch();

  // const setToChannelsTab = () => {
  //   dispatch(setLeftPanelActiveTabChannels());
  // };

  // const setToFriendsTab = () => {
  //   dispatch(setLeftPanelActiveTabFriends());
  // };

  const updateSelectedPageAndMain = page => {
    const pages = {
      channels: "channels",
      friends: "friends"
    };
    if (pages[page]) {
      history.push(pages[page]);
    } else {
      console.log("no such page exists.");
    }
  };

  const updateSelectedPanelPage = page => {
    const pages = {
      channels: "channels",
      friends: "friends"
    };
    if (pages[page]) {
      setSelectedPage(pages[page]);
    } else {
      console.log("no such page exists.");
    }
  };

  return (
    <Switch>
      <Route exact path="/channels">
        <LeftPanel
          channels={channels}
          friends={friends}
          selected={selectedChannel}
          handleSelect={id => setSelectedChannel(id)}
          updateSelectedPage={updateSelectedPageAndMain}
          isCollapsed={isCollapsed}
          selectedPage="channels"
          handleCollapse={() => dispatch(toggleLeftPanel())}
        />
      </Route>
      <Route exact path="/friends">
        <LeftPanel
          channels={channels}
          friends={friends}
          selected={selectedChannel}
          handleSelect={id => setSelectedChannel(id)}
          updateSelectedPage={updateSelectedPageAndMain}
          isCollapsed={isCollapsed}
          selectedPage="friends"
          handleCollapse={() => dispatch(toggleLeftPanel())}
        />
      </Route>
      <Route>
        <LeftPanel
          channels={channels}
          friends={friends}
          selected={selectedChannel}
          handleSelect={id => setSelectedChannel(id)}
          updateSelectedPage={updateSelectedPanelPage}
          isCollapsed={isCollapsed}
          selectedPage={selectedPage}
          handleCollapse={() => dispatch(toggleLeftPanel())}
        />
      </Route>
    </Switch>
  );
}
