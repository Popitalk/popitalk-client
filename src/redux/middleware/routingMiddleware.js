import history from "../../history";
import {
  createRoom,
  addChannel,
  deleteChannel,
  deleteChannelWs,
  leaveRoom,
  acceptFriendRequest
} from "../actions";

const routingMiddleware = () => store => next => action => {
  if (leaveRoom.fulfilled.match(action)) {
    history.push("/channels/following");
  }

  next(action);

  if (acceptFriendRequest.fulfilled.match(action)) {
    history.push(`/rooms/${action.payload.channelId}`);
  } else if (createRoom.fulfilled.match(action)) {
    history.push(`/rooms/${action.payload.channelId}`);
  } else if (addChannel.fulfilled.match(action)) {
    if (action.payload.channel?.type === "channel") {
      history.push(`/channels/${action.payload.channel.id}/video`);
    } else {
      history.push(`/rooms/${action.payload.channel.id}`);
    }
  } else if (deleteChannel.fulfilled.match(action)) {
    history.push("/channels/following");
  } else if (deleteChannelWs.match(action)) {
    if (
      history.location.pathname.startsWith(
        `/channels/${action.payload.channelId}`
      )
    ) {
      history.push("/channels/following");
    }
  }
};

export default routingMiddleware;
