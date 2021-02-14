import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route } from "react-router";
import LeftPanel from "../components/LeftPanels/LeftPanel";
import {
  searchUsers,
  setLastMessageSeen,
  getRecommendedChannelsPanel,
  setLeftPanelActiveTabChannels,
  setLeftPanelActiveTabFriends
} from "../redux/actions";
import { openInviteModal, openProfileModal } from "../redux";
import history from "../history";
import {
  mapIdsToUsers,
  setRelationshipHandlers,
  getChannels
} from "../helpers/functions";
import { orderBy } from "lodash";
// import { channelHasNewMessage } from "../util/channelHasNewMessage";

export default function LeftPanelContainer() {
  const dispatch = useDispatch();
  let match = useRouteMatch("/channels/:channelId");
  let selectedChannel = match?.params.channelId ? match.params.channelId : 0;

  match = useRouteMatch("/rooms/:roomId");
  if (selectedChannel === 0) {
    selectedChannel = match?.params.roomId ? match.params.roomId : 0;
  }

  // == NOTIFICATION ATTEMPT ON THE CLIENT == NEEDS REMAKE
  // const numberOfNotifications = useSelector(state => {
  //   let counter = 0;
  //   const channels = Object.keys(state.channels).map(key => {
  //     return state.channels[key];
  //   });
  //   channels.forEach(channel => {
  //     if (channelHasNewMessage(channel)) counter++;
  //   });
  //   return counter;
  // });
  const channels = useSelector(state => state.channels);
  const recommendedChannelsPanel = useSelector(
    state => state.recommendedChannels.panel
  );
  const users = useSelector(state => state.users);
  const relationships = useSelector(state => state.relationships);
  const foundUsers = useSelector(state => state.userSearch);
  const userSearchStatus = useSelector(state => state.api.userSearchApi.status);
  const { defaultAvatar, defaultIcon } = useSelector(state => state.general);
  const { id: ownId, channelIds, roomIds } = useSelector(state => state.self);
  const isCollapsed = useSelector(state => state.ui.isCollapsed);
  const leftPanelActiveTab = useSelector(state => state.ui.leftPanelActiveTab);

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
        if (
          channel.ownerId !== ownId &&
          channel.owner_id !== ownId &&
          channel.members
        ) {
          if (channel.members.includes(ownId)) {
            followingChannels.push(channel);
          }
        }
      }
    });

  const [friendsSearchFocus, setFriendsSearchFocus] = useState(false);
  const [recommendedList, setRecommendedList] = useState([]);

  useEffect(() => {
    const channels = getChannels(
      recommendedChannelsPanel,
      defaultAvatar,
      defaultIcon
    );
    setRecommendedList(channels);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recommendedChannelsPanel]);

  useEffect(() => {
    dispatch(getRecommendedChannelsPanel({}));
  }, [dispatch]);

  const rooms = orderBy(
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
        members
      };
    }),
    room => new Date(room.lastMessageAt || room.createdAt),
    ["desc"]
  );

  const foundUsersMap = foundUsers.map(u => {
    return setRelationshipHandlers(
      u,
      relationships,
      dispatch,
      defaultAvatar,
      ownId
    );
  });

  const handleSelectChannel = id => {
    history.push(`/channels/${id}`);
    dispatch(setLeftPanelActiveTabChannels());
  };
  const handleSelectRoom = id => {
    dispatch(setLastMessageSeen({ channelId: id }));
    history.push(`/rooms/${id}`);
    dispatch(setLeftPanelActiveTabFriends());
  };
  const handleOpenProfile = id => dispatch(openProfileModal(id));
  const handleCreateRoom = id => dispatch(openInviteModal(id, true));
  const handleCreateChannel = () => {
    history.push("/create");
    dispatch(setLeftPanelActiveTabChannels());
  };
  const updateSelectedPageAndMain = page => {
    const pages = {
      channels: "/",
      friends: "/friends"
    };
    if (pages[page]) {
      history.push(pages[page]);
    } else {
      console.log("no such page exists.");
    }
  };

  return (
    <Switch>
      <Route exact path="/">
        <LeftPanel
          yourChannels={yourChannels}
          followingChannels={followingChannels}
          recommendedChannels={recommendedList}
          userSearchResults={foundUsersMap}
          userSearchStatus={userSearchStatus}
          blocks={blocks}
          handleSearch={username => dispatch(searchUsers(username))}
          roomsResults={rooms}
          selected={selectedChannel}
          handleSelectChannel={handleSelectChannel}
          handleSelectRoom={handleSelectRoom}
          handleCreateChannel={handleCreateChannel}
          handleProfile={handleOpenProfile}
          isCollapsed={isCollapsed}
          selectedPage="channels"
          handleCreateRoom={() => handleCreateRoom(selectedChannel)}
          setFriendsSearchFocus={setFriendsSearchFocus}
          updateSelectedPage={updateSelectedPageAndMain}
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
          handleCreateChannel={handleCreateChannel}
          handleProfile={handleOpenProfile}
          isCollapsed={isCollapsed}
          selectedPage="friends"
          handleCreateRoom={() => handleCreateRoom(selectedChannel)}
          friendsSearchFocus={friendsSearchFocus}
          setFriendsSearchFocus={setFriendsSearchFocus}
          updateSelectedPage={updateSelectedPageAndMain}
        />
      </Route>
      <Route>
        <LeftPanel
          yourChannels={yourChannels}
          followingChannels={followingChannels}
          recommendedChannels={recommendedList}
          userSearchResults={foundUsersMap}
          userSearchStatus={userSearchStatus}
          blocks={blocks}
          handleSearch={username => dispatch(searchUsers(username))}
          roomsResults={rooms}
          selected={selectedChannel}
          handleSelectChannel={handleSelectChannel}
          handleSelectRoom={handleSelectRoom}
          handleCreateChannel={handleCreateChannel}
          handleProfile={handleOpenProfile}
          isCollapsed={isCollapsed}
          selectedPage={leftPanelActiveTab}
          handleCreateRoom={() => handleCreateRoom(selectedChannel)}
          setFriendsSearchFocus={setFriendsSearchFocus}
          updateSelectedPage={updateSelectedPageAndMain}
        />
      </Route>
    </Switch>
  );
}
