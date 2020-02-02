import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteChannel } from "../../redux/actions";
import "./DeleteChannelModal.css";

export default function DeleteChannelModal() {
  const { channelId } = useSelector(state => state.modalState);
  const dispatch = useDispatch();
  const deleteChannelDispatcher = useCallback(
    () => dispatch(deleteChannel(channelId)),
    [channelId, dispatch]
  );

  return (
    <div className="DeleteChannelModal--container">
      <div className="DeleteChannelModal--header">
        <h3>Delete Channel</h3>
      </div>
      <div className="DeleteChannelModal--content">
        <h4>Are you sure you want to delete this channel?</h4>
        <h5>You cannot recover or undo this action</h5>
        <button
          type="button"
          className="button"
          onClick={deleteChannelDispatcher}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
