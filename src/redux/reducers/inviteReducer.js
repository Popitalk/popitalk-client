import {
  INVITE_CLEAR,
  INVITE_ADD_CHANNEL,
  INVITE_ADD_SELECTED_FRIENDS,
  INVITE_REMOVE_SELECTED_FRIENDS
} from "../../helpers/constants";

const initialState = {
  channelId: "",
  selectedFriends: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INVITE_CLEAR:
      return {
        ...state,
        ...initialState
      };

    case INVITE_ADD_CHANNEL:
      return {
        ...state,
        channelId: payload.channelId
      };

    case INVITE_ADD_SELECTED_FRIENDS:
      return {
        ...state,
        selectedFriends: [...state.selectedFriends, payload.selectedFriend]
      };

    case INVITE_REMOVE_SELECTED_FRIENDS:
      return {
        ...state,
        selectedFriends: state.selectedFriends.filter(
          sf => sf !== payload.selectedFriend
        )
      };

    default:
      return state;
  }
};
