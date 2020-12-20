import React from "react";
import strings from "../../helpers/localization";
import Button from "../Controls/Button";
import kofiLogo from "../../assets/attributes/kofi-logo.png";
import patreonLogo from "../../assets/attributes/patreon-logo.png";

export default function LeftPanelFooter({ example }) {
  const directoryListClassName =
    "font-bold text-copy-primary hover:bg-hover-highlight no-underline p-1 rounded-md";
  const directoryList = (listPath, listString) => (
    <li className="pr-2 py-1">
      <a href={listPath} className={directoryListClassName}>
        {listString}
      </a>
    </li>
  );
  const redirectList = (listPath, listString) => (
    <li className="pr-2">
      <a href={listPath} className="text-copy-highlight no-underline">
        {listString}
      </a>
    </li>
  );
  const supportButton = (path, src, string) => (
    <a href={path}>
      <Button
        imageButton
        imageButtonSrc={src}
        imageButtonClassName="w-6"
        imageButtonSpan={string}
        imageButtonSpanClassName="text-xs text-copy-primary ml-1"
        className="bg-background-secondary hover:bg-hover-highlight p-2 rounded-md"
      />
    </a>
  );
  return (
    <div className="px-6">
      <nav>
        {/* === Directory === */}
        <ul className="flex flex-wrap text-xs my-4 -ml-1">
          {directoryList("/welcome", strings.loginOrSignup)}
          {directoryList("/friends", strings.friends)}
          {directoryList("/create", strings.createChannelButton)}
          {directoryList(
            "https://medium.com/popitalk/end-user-license-agreement-and-terms-of-service-dc8a25c0f5d2",
            strings.termsOfUse
          )}
          {directoryList(
            "https://medium.com/popitalk/privacy-policy-ab89684edca6",
            strings.privacyPolicy
          )}
          {directoryList(
            "https://medium.com/popitalk/copyright-policy-872f41dd7856s",
            strings.copyright
          )}
        </ul>
        {/* === Popitalk Team === */}
        <ul className="flex flex-wrap content-start text-xs">
          <p className="pr-2 text-copy-secondary">{strings.popitalk}</p>
          {redirectList("https://blog.popitalk.com/", strings.aboutUs)}
          {redirectList("https://blog.popitalk.com/blog", strings.blog)}
          {redirectList(
            "https://blog.popitalk.com/about-us/",
            strings.sendFeedbackButton
          )}
        </ul>
        {/* === Social Media links === */}
        <ul className="flex flex-wrap content-start text-xs">
          <p className="pr-2 text-copy-secondary">{strings.followUson}</p>
          {redirectList("https://twitter.com/PopitalkT", strings.twitter)}
          {redirectList(
            "https://www.youtube.com/channel/UCJSjPolz6SiYKvVxFmK-Z1A",
            strings.youtube
          )}
          {redirectList("https://discord.gg/hdFfgg7", strings.discord)}
          {redirectList("https://www.facebook.com/popitalk", strings.facebook)}
        </ul>
      </nav>
      <div className="flex my-2 space-x-2">
        {supportButton(
          "https://ko-fi.com/popitalk",
          kofiLogo,
          strings.buyUsCoffee
        )}
        {supportButton(
          "https://www.patreon.com/Popitalk",
          patreonLogo,
          strings.becomeAPatron
        )}
      </div>
      <div className="text-xs text-copy-secondary pt-4">
        <p>© 2021 Popitalk, Inc.</p>
        <p>CEO: Andrew Jang</p>
        <p>Made with love by Popitalk Team.</p>
      </div>
    </div>
  );
}
