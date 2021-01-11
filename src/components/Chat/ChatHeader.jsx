import React from "react";
import { useSelector } from "react-redux";

import Button from "../Controls/Button";
import strings from "../../helpers/localization";
import RoomIcon from "../Controls/RoomIcon";

function ChatHeader({ openFollowersList, followersCount, isRoom, channelId }) {
  const { loggedIn } = useSelector(state => state.general);
  const channel = useSelector(state => state.channels[channelId]);
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);

  return (
    <div className="flex h-14 items-center justify-between bg-background-secondary rounded-tr-md px-2 select-none">
      <div className="flex items-center ml-12 sm:ml-0">
        <RoomIcon
          ids={channelId}
          images={[channel.icon || isRoom ? defaultAvatar : defaultIcon]}
          size="sm"
          className="transition transform ease-in-out hover:scale-110 duration-100 cursor-pointer"
        />
        <p className="flex flex-shrink-0 text-sm font-medium text-copy-primary p-2 w-full truncate overflow-hidden">
          {channel.name}
        </p>
      </div>
      <Button
        hoverable
        styleNone
        styleNoneContent={`${followersCount} ${
          isRoom ? strings.roomMembers : strings.followers
        }`}
        styleNoneContentClassName="text-sm text-copy-secondary hover:text-copy-highlight duration-100"
        className="px-4 py-1 rounded-lg bg-background-primary"
        onClick={loggedIn && openFollowersList}
        analyticsString="Show followers List: ChatHeader"
      />
    </div>
  );
}

export default ChatHeader;
