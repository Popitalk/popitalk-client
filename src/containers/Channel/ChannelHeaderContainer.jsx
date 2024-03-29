import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import sortBy from "lodash/sortBy";
import { followChannel } from "../../redux/actions";
import ChannelHeader from "../../components/ChannelHeader";

const selectChannelName = createSelector(
  (state, channelId) => state.channels[channelId],
  (state, _) => state.users,
  (state, _) => state.self,
  (channel, users, self) => {
    let channelName;

    if (channel.name) {
      channelName = channel.name;
    } else if (channel.type === "self") {
      channelName = self.username;
    } else if (channel.type === "friend") {
      channelName =
        users[channel.members.filter(userId => userId !== self.id)[0]].username;
    } else if (channel.type === "group") {
      channelName = sortBy(channel.members, userId =>
        users[userId].username.toLowerCase()
      )
        .map(userId => users[userId].username)
        .join(", ");
    } else if (channel.type === "stranger") {
      channelName =
        users[channel.members.filter(userId => userId !== self.id)[0]].username;
    }

    return channelName;
  }
);

export default function ChannelHeaderContainer({
  channelId,
  isAdmin,
  isMember,
  type,
  status
}) {
  const channel = useSelector(state => state.channels[channelId]);
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const channelName = useSelector(state => selectChannelName(state, channelId));

  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followChannel(channelId));
  };

  return (
    <ChannelHeader
      id={channelId}
      name={channelName}
      icon={
        type === "room"
          ? channel.icon || defaultAvatar
          : channel.icon || defaultIcon
      }
      handleFollow={handleFollow}
      isMember={isMember}
      isAdmin={isAdmin}
      videoStatus={status}
      type={channel.type}
    />
  );
}
