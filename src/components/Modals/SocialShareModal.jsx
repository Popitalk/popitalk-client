import React from "react";
import strings from "../../localization/strings";
import InviteForm from "../Forms/InviteForm";

export default function SocialShareModal({ link }) {
  return (
    <div className="flex flex-col w-full h-64 px-8 p-4">
      <h1 className="text-copy-primary font-bold text-lg w-full">
        {strings.inviteModalHeader}
      </h1>
      <InviteForm link={link} />
    </div>
  );
}
