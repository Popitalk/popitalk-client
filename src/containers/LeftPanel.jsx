import React, { useState } from "react";
import LeftPanel from "../comp/LeftPanel";
import { useSelector, useDispatch } from "react-redux";
import { toggleLeftPanel } from "../redux/actions";
import { Switch, Route } from "react-router";
import history from "../history";

export default function LeftPanelContainer() {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const channels = useSelector(state => state.channels);
  const friends = useSelector(state => state.relationships.friends);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const dispatch = useDispatch();

  const updateSelectedPage = page => {
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
  return (
    <Switch>
      <Route exact path="/channels">
        <LeftPanel
          channels={channels}
          friends={friends}
          selected={selectedChannel}
          handleSelect={id => setSelectedChannel(id)}
          updateSelectedPage={updateSelectedPage}
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
          updateSelectedPage={updateSelectedPage}
          isCollapsed={isCollapsed}
          selectedPage="friends"
          handleCollapse={() => dispatch(toggleLeftPanel())}
        />
      </Route>
    </Switch>
  );
}
