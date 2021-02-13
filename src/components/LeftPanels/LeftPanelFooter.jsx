import React from "react";
import strings from "../../localization/strings";
import Button from "../Controls/Button";
import kofiLogo from "../../assets/attributes/kofi-logo.png";

export default function LeftPanelFooter() {
  const directoryClassName =
    "font-bold text-copy-primary hover:bg-hover-highlight no-underline p-1 rounded-md";
  const moreInfoClassName = "text-copy-highlight no-underline";
  const buttonClassName =
    "bg-background-secondary hover:bg-hover-highlight p-2 rounded-md";
  const directoryListArray = [
    { path: "/welcome", string: strings.loginOrSignup },
    { path: "/friends", string: strings.friends },
    { path: "/create", string: strings.createChannelButton },
    {
      path:
        "https://medium.com/popitalk/end-user-license-agreement-and-terms-of-service-dc8a25c0f5d2",
      string: strings.termsOfUse
    },
    {
      path: "https://medium.com/popitalk/privacy-policy-ab89684edca6",
      string: strings.privacyPolicy
    },
    {
      path: "https://medium.com/popitalk/copyright-policy-872f41dd7856s",
      string: strings.copyright
    }
  ];
  const moreInfoListArray = [
    { path: "https://blog.popitalk.com/", string: strings.aboutUs },
    { path: "https://blog.popitalk.com/blog", string: strings.blog },
    {
      path: "https://blog.popitalk.com/about-us/",
      string: strings.sendFeedbackButton
    }
  ];
  const socialMediaListArray = [
    { path: "https://twitter.com/PopitalkT", string: strings.twitter },
    {
      path: "https://www.youtube.com/channel/UCJSjPolz6SiYKvVxFmK-Z1A",
      string: strings.youtube
    },
    {
      path: "https://discord.gg/WFARTv3JC4",
      string: strings.discord
    },
    { path: "https://www.facebook.com/popitalk", string: strings.facebook }
  ];

  // === Function to repeat items in a column. `items={array}` === //
  function DirectoryList({ items }) {
    return items.map(item => (
      <li className="pr-2 py-1" key={item.path}>
        <a href={item.path} className={directoryClassName}>
          {item.string}
        </a>
      </li>
    ));
  }
  function MoreInfoList({ items }) {
    return items.map(item => (
      <li className="pr-2" key={item.path}>
        <a href={item.path} className={moreInfoClassName}>
          {item.string}
        </a>
      </li>
    ));
  }
  return (
    <div className="bg-background-primary">
      <nav>
        {/* === Directory === */}
        <ul className="flex flex-wrap text-xs my-4 -ml-1">
          <DirectoryList items={directoryListArray} />
        </ul>
        {/* === Popitalk Team === */}
        <ul className="flex flex-wrap content-start text-xs">
          <p className="pr-2 text-copy-secondary">{strings.popitalk}</p>
          <MoreInfoList items={moreInfoListArray} />
        </ul>
        {/* === Social Media links === */}
        <ul className="flex flex-wrap content-start text-xs">
          <p className="pr-2 text-copy-secondary">{strings.followUson}</p>
          <MoreInfoList items={socialMediaListArray} />
        </ul>
      </nav>
      <div className="flex my-2 space-x-2">
        <a href="https://ko-fi.com/popitalk">
          <Button
            imageButton
            imageButtonSrc={kofiLogo}
            imageButtonClassName="w-6"
            imageButtonSpan={strings.buyUsCoffee}
            imageButtonSpanClassName="text-xs text-copy-primary ml-1"
            className={buttonClassName}
          />
        </a>
      </div>
      <div className="text-xs text-copy-secondary pt-4">
        <p>© 2021 Popitalk, Inc.</p>
        <p>CEO: Andrew Jang</p>
        <p>Made with love by Popitalk Team.</p>
      </div>
    </div>
  );
}
