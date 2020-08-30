import React from "react";
import DropDownContainer from "./DropDownContainer";
import ContainerHeader from "../ContainerHeader";
import strings from "../../helpers/localization";
import Button from "../Controls/Button";

export default function FriendRequests({ friendRequests, ...rest }) {
  return (
    <DropDownContainer>
      <ContainerHeader title={strings.aboutPopitalk} />
      <div className="flex flex-col justify-center items-center h-auto w-full bg-primaryBackground py-2">
        <a href="https://twitter.com/PopitalkT">
          <Button
            styleNone
            styleNoneContent={strings.twitter}
            styleNoneContentClassName="text-primaryText text-sm"
            className="py-2 px-4 mx-2 hover:bg-highlightBackground rounded-lg duration-75"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCJSjPolz6SiYKvVxFmK-Z1A">
          <Button
            styleNone
            styleNoneContent={strings.youtube}
            styleNoneContentClassName="text-primaryText text-sm"
            className="py-2 px-4 mx-2 hover:bg-highlightBackground rounded-lg duration-75"
          />
        </a>
        <a href="https://discord.gg/hdFfgg7">
          <Button
            styleNone
            styleNoneContent={strings.discord}
            styleNoneContentClassName="text-primaryText text-sm"
            className="py-2 px-4 mx-2 hover:bg-highlightBackground rounded-lg duration-75"
          />
        </a>
        <a href="https://about.popitalk.com/">
          <Button
            styleNone
            styleNoneContent={strings.sendFeedbackButton}
            styleNoneContentClassName="text-primaryText text-sm"
            className="py-2 px-4 mx-2 hover:bg-highlightBackground rounded-lg duration-75"
          />
        </a>
      </div>
    </DropDownContainer>
  );
}
