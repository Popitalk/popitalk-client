import React, { useState } from "react";
import LeftPanel from "../comp/LeftPanel";
import { useSelector, useDispatch } from "react-redux";

export default function LeftPanelContainer({
  handleCollapse,
  updateSelectedPage,
  selectedPage,
  isCollapsed = false
}) {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const channels = useSelector(state => state.channels);
  const friends = useSelector(state => state.relationships.friends);
  return (
    <LeftPanel
      channels={channels}
      friends={friends}
      selected={selectedChannel}
      handleSelect={id => setSelectedChannel(id)}
      updateSelectedPage={updateSelectedPage}
      isCollapsed={isCollapsed}
      selectedPage={selectedPage}
      handleCollapse={handleCollapse}
    />
  );
}
