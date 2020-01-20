import {
  INVITE_CLEAR,
  INVITE_ADD_CHANNEL,
  INVITE_ADD_SELECTED_FRIENDS,
  INVITE_REMOVE_SELECTED_FRIENDS
} from "../../../helpers/constants";

export const clear = () => ({
  type: INVITE_CLEAR
});

export const addChannel = channelId => ({
  type: INVITE_ADD_CHANNEL,
  payload: { channelId }
});

export const addSelectedFriends = selectedFriend => ({
  type: INVITE_ADD_SELECTED_FRIENDS,
  payload: { selectedFriend }
});

export const removeSelectedFriends = selectedFriend => ({
  type: INVITE_REMOVE_SELECTED_FRIENDS,
  payload: { selectedFriend }
});
