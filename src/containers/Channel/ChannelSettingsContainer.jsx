import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateChannel,
  makeAdmin,
  deleteAdmin,
  addBan,
  deleteBan
} from "../../redux/actions";
import { openDeleteChannelModal, openProfileModal } from "../../redux";
import { mapIdsToUsers } from "../../helpers/functions";
import ChannelSettingsPanel from "../../components/Channel/ChannelSettingsPanel";

export default function ChannelSettingsContainer({ channelId }) {
  const dispatch = useDispatch();
  const channelApi = useSelector(state => state.api.channel);
  const { loading, status, error } = channelApi;
  const { defaultAvatar } = useSelector(state => state.general);
  const users = useSelector(state => state.users);
  const channel = useSelector(state => state.channels[channelId]);
  const { ownerId, members, banned } = channel;
  const followers = mapIdsToUsers(members, users, defaultAvatar);
  const admins = channel.admins
    ? mapIdsToUsers(channel.admins, users, defaultAvatar)
    : [];
  const bannedUsers = mapIdsToUsers(banned, users, defaultAvatar);
  const initialChannelForm = {
    ...channel,
    private: !channel.public,
    category: ""
  };

  return (
    <ChannelSettingsPanel
      ownerId={ownerId}
      followers={followers}
      admins={admins}
      bannedUsers={bannedUsers}
      alreadySelected={channel.categories}
      openDeleteChannelModal={() => dispatch(openDeleteChannelModal(channelId))}
      handleProfile={id => dispatch(openProfileModal(id))}
      initialChannelForm={initialChannelForm}
      handleChannelFormSubmit={values =>
        dispatch(updateChannel({ channelId, ...values }))
      }
      channelFormLoading={loading}
      channelFormError={status === "error" ? error : false}
      addAdminHandler={userId => dispatch(makeAdmin({ channelId, userId }))}
      removeAdminHandler={userId =>
        dispatch(deleteAdmin({ channelId, userId }))
      }
      addBanHandler={bannedId => dispatch(addBan({ channelId, bannedId }))}
      removeBanHandler={bannedId =>
        dispatch(deleteBan({ channelId, bannedId }))
      }
    />
  );
}
