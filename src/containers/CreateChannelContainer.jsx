import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChannel } from "../redux/actions";
import ChannelForm from "../comp/Channel/ChannelForm";

export default function CreateChannelContainer() {
  const dispatch = useDispatch();
  const createChannel = values => dispatch(addChannel(values));
  const addChannelApi = useSelector(state => state.api.channel);

  return (
    <ChannelForm
      initial={{
        name: "",
        description: "",
        private: false,
        icon: null,
        category: ""
      }}
      handleSubmit={createChannel}
      loading={addChannelApi.loading}
      error={addChannelApi.status === "error" ? addChannelApi.error : false}
    />
  );
}
