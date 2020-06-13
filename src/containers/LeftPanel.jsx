import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route } from "react-router";
import sortBy from "lodash/sortBy";
import LeftPanel from "../comp/LeftPanels/LeftPanel";
import {
  toggleLeftPanel
  // setLeftPanelActiveTabChannels,
  // setLeftPanelActiveTabFriends
} from "../redux/actions";
import history from "../history";
import { mapIdsToUsers } from "../helpers/functions";

export default function LeftPanelContainer() {
  let match = useRouteMatch("/channels/:channelId");
  const selectedChannel = match?.params.channelId ? match.params.channelId : 0;

  const [selectedPage, setSelectedPage] = useState("channels");
  const channels = useSelector(state => state.channels);
  const users = useSelector(state => state.users);
  const friendIds = useSelector(state => state.relationships.friends);
  const { defaultAvatar } = useSelector(state => state.general);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  // const activeTab = useSelector(state => state.ui.leftPanelActiveTab);

  const friends = mapIdsToUsers(friendIds, users, defaultAvatar);

  let yourChannels = [];
  let followingChannels = [];

  const { defaultIcon } = useSelector(state => state.general);
  const { id: ownId, channelIds, roomIds } = useSelector(state => state.self);
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

  const rooms = sortBy(
    roomIds.map(roomId => {
      const members = mapIdsToUsers(
        channels[roomId].members,
        users,
        defaultAvatar
      ).filter(m =>
        channels[roomId].members.length === 1 ? true : m.id !== ownId
      );

      return {
        id: roomId,
        ...channels[roomId],
        members: members
      };
    }),
    room => new Date(room.lastMessageAt)
  );

  const dispatch = useDispatch();

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
          userSearchResults={friends}
          roomsResults={rooms}
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
          userSearchResults={friends}
          roomsResults={rooms}
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
          userSearchResults={friends}
          roomsResults={rooms}
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
