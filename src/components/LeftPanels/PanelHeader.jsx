import React from "react";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PanelHeader({
  handleCollapse,
  updateSelectedPage,
  selectedPage,
  numberOfNotifications
}) {
  const navClassName =
    "flex items-center space-x-2 p-2 focus:outline-none hover:bg-hover-highlight rounded-lg transition transform ease-in-out hover:scale-105 duration-100 cursor-pointer";

  const navButtonArray = [
    { title: "channels", icon: "globe-americas", string: strings.channels },
    { title: "friends", icon: "paper-plane", string: strings.friends }
  ];
  function NavButton({ items }) {
    return items.map(item => (
      <nav
        key={item.id}
        className={`${navClassName} ${
          selectedPage === item.title
            ? "text-copy-highlight font-semibold"
            : "text-copy-secondary font-regular"
        }`}
        onClick={() => updateSelectedPage(item.title)}
      >
        <FontAwesomeIcon icon={item.icon} />
        <h1>{item.string}</h1>
      </nav>
    ));
  }
  return (
    <div className="flex bg-background-primary items-center w-full select-none space-x-4 px-2">
      <Button
        hoverable
        styleNone
        icon="bars"
        className="hidden sm:block p-4 ml-2 rounded-full text-copy-secondary hover:text-copy-highlight"
        onClick={handleCollapse}
        analyticsString="Collapse Button: PanelHeader"
      />
      <div className="flex space-x-2">
        <NavButton items={navButtonArray} />
      </div>
    </div>
  );
}
