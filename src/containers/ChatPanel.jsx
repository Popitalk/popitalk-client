import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import ChatPanel from "../comp/Chat/ChatPanel";
import "../components/ChatPanel/ChatPanel.css";
import { openListModal } from "../redux/actions";

function ChatPanelContainer(props) {
  const channelId = props.match.params.roomId || props.match.params.channelId;
  const channelMessages = useSelector(state => state.messages[channelId]);
  const dispatch = useDispatch();
  const openFollowersList = () =>
    dispatch(openListModal(channelId, "followers"));
  const followersCount = useSelector(
    state => state.channels[channelId].members?.length
  );
  const isRoom = !!props.match.params.roomId;
  const [isGifsOpen, setIsGifsOpen] = useState(false);
  const updateGifsOpen = () => {
    setIsGifsOpen(!isGifsOpen);
  };

  return (
    <ChatPanel
      channelMessages={channelMessages}
      channelId={channelId}
      openFollowersList={openFollowersList}
      followersCount={followersCount}
      isRoom={isRoom}
      updateGifsOpen={updateGifsOpen}
      isGifsOpen={isGifsOpen}
    />
  );
}

export default withRouter(ChatPanelContainer);
