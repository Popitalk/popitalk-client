import React from "react";
import Button from "../Controls/Button";
import strings from "../../localization/strings";

export default function PanelHeader({
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
    <div className="flex bg-background-secondary sm:bg-background-primary items-center w-full select-none space-x-4 py-2 px-4">
      <NavButton items={navButtonArray} />
    </div>
  );
}
