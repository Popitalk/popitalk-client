import React from "react";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage,
  numberOfNotifications
}) {
  const navClassName =
    "flex items-center space-x-2 p-2 focus:outline-none hover:bg-hover-highlight rounded-lg";

  const navButtonArray = [
    { title: "channels", icon: "globe-americas", string: strings.channels },
    { title: "friends", icon: "paper-plane", string: strings.friends }
  ];
  function NavButton({ items }) {
    return items.map(item => (
      <Button
        hoverable
        styleNone
        styleNoneContent={item.string}
        icon={item.icon}
        key={item.title}
        className={`${navClassName} ${
          selectedPage === item.title
            ? "text-copy-highlight font-semibold"
            : "text-copy-secondary font-regular"
        }`}
        onClick={() => updateSelectedPage(item.title)}
      />
    ));
  }
  return (
    <div className="flex bg-background-secondary sm:bg-background-primary items-center w-full select-none space-x-4 px-2">
      <Button
        hoverable
        styleNone
        icon="bars"
        className="hidden sm:block p-4 ml-2 rounded-full text-copy-secondary hover:text-copy-highlight"
        onClick={handleCollapse}
        analyticsString="Collapse Button: PanelHeader"
      />
      <div className="py-2 sm:py-0 flex w-full space-x-2">
        <NavButton items={navButtonArray} />
      </div>
    </div>
  );
}
