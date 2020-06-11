import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route } from "react-router";
import LeftPanel from "../comp/LeftPanels/LeftPanel";
import {
  toggleLeftPanel
  // setLeftPanelActiveTabChannels,
  // setLeftPanelActiveTabFriends
} from "../redux/actions";
import history from "../history";
import { getUser } from "../helpers/api";

export default function LeftPanelContainer() {
  let match = useRouteMatch("/channels/:channelId");
  const selectedChannel = match?.params.channelId ? match.params.channelId : 0;

  const [selectedPage, setSelectedPage] = useState("channels");
  const [friends, setFriends] = useState([]);
  const channels = useSelector(state => state.channels);
  const friendIds = useSelector(state => state.relationships.friends);
  const { defaultAvatar } = useSelector(state => state.general);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  // const activeTab = useSelector(state => state.ui.leftPanelActiveTab);

  let yourChannels = [];
  let followingChannels = [];

  const { defaultIcon } = useSelector(state => state.general);
  const { id: ownId, channelIds } = useSelector(state => state.self);
  channelIds
    .map(channelId => ({
      id: channelId,
      ...channels[channelId],
      icon: channels[channelId].icon || defaultIcon
    }))
    .forEach(channel => {
      if (channel.ownerId === ownId) {
        yourChannels.push(channel);
      } else {
        followingChannels.push(channel);
      }
    });

  console.log(yourChannels);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getFriends() {
      const friends = await friendIds.map(async friend => {
        const { data } = await getUser(friend);
        data.avatar = data.avatar || defaultAvatar;
        return data;
      });
      setFriends(await Promise.all(friends));
    }
    getFriends();
  }, [friendIds, defaultAvatar]);

  // const setToChannelsTab = () => {
  //   dispatch(setLeftPanelActiveTabChannels());
  // };

  // const setToFriendsTab = () => {
  //   dispatch(setLeftPanelActiveTabFriends());
  // };

  const updateSelectedPageAndMain = page => {
    const pages = {
      channels: "/channels",
      friends: "/friends"
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

  const handleSelectChannel = id => {
    history.push(`/channels/${id}/video`);
  };

  return (
    <Switch>
      <Route exact path="/channels">
        <LeftPanel
          yourChannels={yourChannels}
          followingChannels={followingChannels}
          friends={friends}
          selected={selectedChannel}
          handleSelect={handleSelectChannel}
          handleCreateChannel={() => history.push("/create")}
          updateSelectedPage={updateSelectedPageAndMain}
          isCollapsed={isCollapsed}
          selectedPage="channels"
          handleCollapse={() => dispatch(toggleLeftPanel())}
        />
      </Route>
      <Route exact path="/friends">
        <LeftPanel
          yourChannels={yourChannels}
          followingChannels={followingChannels}
          friends={friends}
          selected={selectedChannel}
          handleSelect={handleSelectChannel}
          handleCreateChannel={() => history.push("/create")}
          updateSelectedPage={updateSelectedPageAndMain}
          isCollapsed={isCollapsed}
          selectedPage="friends"
          handleCollapse={() => dispatch(toggleLeftPanel())}
        />
      </Route>
      <Route>
        <LeftPanel
          yourChannels={yourChannels}
          followingChannels={followingChannels}
          friends={friends}
          selected={selectedChannel}
          handleSelect={handleSelectChannel}
          handleCreateChannel={() => history.push("/create")}
          updateSelectedPage={updateSelectedPanelPage}
          isCollapsed={isCollapsed}
          selectedPage={selectedPage}
          handleCollapse={() => dispatch(toggleLeftPanel())}
        />
      </Route>
    </Switch>
  );
}
