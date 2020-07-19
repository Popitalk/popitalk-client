import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { getChannel, setAlert } from "../redux/actions";

// HoC for retrieving channel from server and
// redirecting if channel doesn't exist
const withGetChannel = Component => {
  const GetChannelWrapper = props => {
    const dispatch = useDispatch();

    let { channelId, roomId } = useParams();
    channelId = channelId || roomId;

    let channel = useSelector(state => state.channels[channelId]);
    if (!channel) {
      dispatch(getChannel(channelId));
    }

    // check for channel again after dispatch, redirect if nonexistent
    if (!channel) {
      dispatch(setAlert("The channel/room you entered does not exist."));
      return <Redirect to="/channels" />;
    }

    return <Component {...props} />;
  };

  return GetChannelWrapper;
};

export default withGetChannel;
