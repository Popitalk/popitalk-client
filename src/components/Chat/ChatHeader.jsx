import React from "react";
import { useSelector } from "react-redux";

import Button from "../Controls/Button";
import strings from "../../helpers/localization";

function ChatHeader({ openFollowersList, followersCount, isRoom }) {
  const { loggedIn } = useSelector(state => state.general);

  return (
    <div className="flex items-center justify-between bg-background-primary px-2 py-1 select-none">
      <Button
        hoverable
        styleNone
        styleNoneContent={`${followersCount} ${
          isRoom ? strings.roomMembers : strings.followers
        }`}
        styleNoneContentClassName="text-sm text-copy-secondary font-semibold hover:text-copy-highlight duration-100"
        className="px-4 py-2 rounded-lg bg-background-secondary"
        onClick={loggedIn && openFollowersList}
        analyticsString="Show followers List: ChatHeader"
      />
    </div>
  );
}

export default ChatHeader;
