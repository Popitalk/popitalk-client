import React from "react";
import InviteForm from "./InviteForm";
import CreateNewAccountForm from "./CreateNewAccountForm";

export default function AnonymousSidebar({ link, handleSubmit, loading }) {
  const headerClasses = "text-sm font-bold text-secondaryText pb-1 pt-4 pl-2";
  const containerClasses =
    "p-4 w-full object-center bg-primaryBackground rounded-xl shadow-xl";

  return (
    <div className="bg-secondaryBackground p-2">
      <div className={headerClasses}>Invite friends to watch with you</div>
      <div className={containerClasses}>
        <InviteForm link={link} />
      </div>
      <div className={headerClasses}>Sign up for more features</div>
      <div className={containerClasses}>
        <CreateNewAccountForm handleSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
}
