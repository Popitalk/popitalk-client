import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChannel } from "../redux/actions";
import ChannelForm from "../components/Forms/ChannelForm";
import Helmet from "react-helmet";
import strings from "../localization/strings";

export default function CreateChannelContainer() {
  const dispatch = useDispatch();
  const addChannelApi = useSelector(state => state.api.channel);
  const isRemoved = useSelector(state => state.ui.isRemoved);

  return (
    <div className={isRemoved === true ? "hidden" : "flex w-full h-full"}>
      <ChannelForm
        initial={{
          name: "",
          description: "",
          private: false,
          icon: null,
          category: ""
        }}
        type="create"
        handleSubmit={values => dispatch(addChannel(values))}
        loading={addChannelApi.loading}
        error={addChannelApi.status === "error" ? addChannelApi.error : false}
        alreadySelected={[]}
      />
      <Helmet>
        <meta charSet="UFT-8" />
        <title>{strings.createChannelTitle}</title>
        <meta name="description" content={strings.createChannelDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={strings.mainKeywords} />
      </Helmet>
    </div>
  );
}
