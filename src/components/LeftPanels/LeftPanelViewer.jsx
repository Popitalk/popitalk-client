import React from "react";
import InviteForm from "../Forms/InviteForm";
import LeftPanelDescription from "./LeftPanelDescription";
import LeftPanelFooter from "./LeftPanelFooter";

export default function LeftPanelViewer({ link }) {
  return (
    <div className="hidden sm:flex flex-col sm:w-84 h-full bg-background-primary select-none">
      <div className="flex flex-col justify-between h-full px-2 space-y-2">
        <div className="bg-background-secondary px-2 py-4 shadow-md rounded-md ">
          <InviteForm link={link} />
        </div>
        <LeftPanelDescription />
        <div className="flex pt-24 pb-4 px-2">
          <LeftPanelFooter />
        </div>
      </div>
    </div>
  );
}
