import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route } from "react-router";
import sortBy from "lodash/sortBy";
import LeftPanel from "../comp/LeftPanels/LeftPanel";
import {
  toggleLeftPanel,
  searchUsers,
  openProfileModal,
  openInviteModal
} from "../redux/actions";
import history from "../history";
import { mapIdsToUsers, setRelationshipHandlers } from "../helpers/functions";

export default function LeftPanelContainer() {
  let match = useRouteMatch("/channels/:channelId");
  let selectedChannel = match?.params.channelId ? match.params.channelId : 0;

  match = useRouteMatch("/rooms/:roomId");
  if (selectedChannel === 0) {
    selectedChannel = match?.params.roomId ? match.params.roomId : 0;
  }

  const [selectedPage, setSelectedPage] = useState(
    match?.params.roomId ? "friends" : "channels"
  );
  const channels = useSelector(state => state.channels);
  const users = useSelector(state => state.users);
  const relationships = useSelector(state => state.relationships);
  const foundUsers = useSelector(state => state.userSearch);
  const userSearchStatus = useSelector(state => state.api.userSearchApi.status);
  const { defaultAvatar } = useSelector(state => state.general);
  const { defaultIcon } = useSelector(state => state.general);
  const { id: ownId, channelIds, roomIds } = useSelector(state => state.self);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);

  const dispatch = useDispatch();

  const blocks = relationships.blockers.length + relationships.blocked.length;

  let yourChannels = [];
  let followingChannels = [];
  channelIds
    .map(channelId => ({
      id: channelId,
      ...channels[channelId],
      icon: channels[channelId].icon || defaultIcon
    }))
    .forEach(channel => {
      if (channel.ownerId === ownId || channel.owner_id === ownId) {
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
  ).reverse();

  const foundUsersMap = foundUsers.map(u => {
    return setRelationshipHandlers(
      u,
      relationships,
      dispatch,
      defaultAvatar,
      ownId
    );
  });

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

  const handleSelectChannel = id => history.push(`/channels/${id}/video`);
  const handleSelectRoom = id => history.push(`/rooms/${id}/video`);
  const handleOpenProfile = id => dispatch(openProfileModal(id));
  const handleCreateRoom = id => dispatch(openInviteModal(id, true));

  return (
    <Switch>
      <Route exact path="/channels">
        <LeftPanel
          yourChannels={yourChannels}
          followingChannels={followingChannels}
          userSearchResults={foundUsersMap}
          userSearchStatus={userSearchStatus}
          blocks={blocks}
          handleSearch={username => dispatch(searchUsers(username))}
          roomsResults={rooms}
          selected={selectedChannel}
          handleSelectChannel={handleSelectChannel}
          handleSelectRoom={handleSelectRoom}
          handleCreateChannel={() => history.push("/create")}
          handleProfile={handleOpenProfile}
          updateSelectedPage={updateSelectedPageAndMain}
          isCollapsed={isCollapsed}
          selectedPage="channels"
          handleCollapse={() => dispatch(toggleLeftPanel())}
          handleCreateRoom={() => handleCreateRoom(selectedChannel)}
        />
      </Route>
      <Route exact path="/friends">
        <LeftPanel
          yourChannels={yourChannels}
          followingChannels={followingChannels}
          userSearchResults={foundUsersMap}
          userSearchStatus={userSearchStatus}
          blocks={blocks}
          handleSearch={username => dispatch(searchUsers(username))}
          roomsResults={rooms}
          selected={selectedChannel}
          handleSelectChannel={handleSelectChannel}
          handleSelectRoom={handleSelectRoom}
          handleCreateChannel={() => history.push("/create")}
          handleProfile={handleOpenProfile}
          updateSelectedPage={updateSelectedPageAndMain}
          isCollapsed={isCollapsed}
          selectedPage="friends"
          handleCollapse={() => dispatch(toggleLeftPanel())}
          handleCreateRoom={() => handleCreateRoom(selectedChannel)}
        />
      </Route>
      <Route>
        <LeftPanel
          yourChannels={yourChannels}
          followingChannels={followingChannels}
          userSearchResults={foundUsersMap}
          userSearchStatus={userSearchStatus}
          blocks={blocks}
          handleSearch={username => dispatch(searchUsers(username))}
          roomsResults={rooms}
          selected={selectedChannel}
          handleSelectChannel={handleSelectChannel}
          handleSelectRoom={handleSelectRoom}
          handleCreateChannel={() => history.push("/create")}
          handleProfile={handleOpenProfile}
          updateSelectedPage={updateSelectedPanelPage}
          isCollapsed={isCollapsed}
          selectedPage={selectedPage}
          handleCollapse={() => dispatch(toggleLeftPanel())}
          handleCreateRoom={() => handleCreateRoom(selectedChannel)}
        />
      </Route>
    </Switch>
  );
}
