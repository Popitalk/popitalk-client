import React from "react";
import strings from "../../helpers/localization";
import Button from "../Controls/Button";
import kofiLogo from "../../assets/attributes/kofi-logo.png";
import patreonLogo from "../../assets/attributes/patreon-logo.png";

export default function LeftPanelFooter({ example }) {
  return (
    <div>
      <nav>
        {/* === Directory === */}
        <ul className="flex flex-wrap text-xs my-4 -ml-1">
          <li className="pr-2 py-1">
            <a
              href="/welcome"
              className="font-bold text-copy-primary hover:bg-hover-highlight no-underline p-1 rounded-md"
            >
              {strings.loginOrSignup}
            </a>
          </li>
          <li className="pr-2 py-1">
            <a
              href="/friends"
              className="font-bold text-copy-primary hover:bg-hover-highlight no-underline p-1 rounded-md"
            >
              {strings.friends}
            </a>
          </li>
          <li className="pr-2 py-1">
            <a
              href="/create"
              className="font-bold text-copy-primary hover:bg-hover-highlight no-underline p-1 rounded-md"
            >
              {strings.createChannelButton}
            </a>
          </li>
          <li className="pr-2 py-1">
            <a
              href="https://medium.com/popitalk/end-user-license-agreement-and-terms-of-service-dc8a25c0f5d2"
              className="font-bold text-copy-primary hover:bg-hover-highlight no-underline p-1 rounded-md"
            >
              {strings.termsOfUse}
            </a>
          </li>
          <li className="pr-2 py-1">
            <a
              href="https://medium.com/popitalk/privacy-policy-ab89684edca6"
              className="font-bold text-copy-primary hover:bg-hover-highlight no-underline p-1 rounded-md"
            >
              {strings.privacyPolicy}
            </a>
          </li>
          <li className="pr-2 py-1">
            <a
              href="https://medium.com/popitalk/copyright-policy-872f41dd7856s"
              className="font-bold text-copy-primary hover:bg-hover-highlight no-underline p-1 rounded-md"
            >
              {strings.copyright}
            </a>
          </li>
        </ul>
        {/* === Popitalk Team === */}
        <ul className="flex flex-wrap content-start text-xs">
          <p className="pr-2 text-copy-secondary">{strings.popitalk}</p>
          <li className="pr-2">
            <a
              href="https://blog.popitalk.com/"
              className="text-copy-highlight no-underline"
            >
              {strings.aboutUs}
            </a>
          </li>
          <li className="pr-2">
            <a
              href="https://blog.popitalk.com/blog"
              className="text-copy-highlight no-underline"
            >
              {strings.blog}
            </a>
          </li>
          <li className="pr-2">
            <a
              href="https://blog.popitalk.com/about-us/"
              className="text-copy-highlight no-underline"
            >
              {strings.sendFeedbackButton}
            </a>
          </li>
        </ul>
        {/* === Social Media links === */}
        <ul className="flex flex-wrap content-start text-xs">
          <p className="pr-2 text-copy-secondary">{strings.followUson}</p>
          <li className="pr-2">
            <a
              href="https://twitter.com/PopitalkT"
              className="text-copy-highlight no-underline"
            >
              {strings.twitter}
            </a>
          </li>
          <li className="pr-2">
            <a
              href="https://www.youtube.com/channel/UCJSjPolz6SiYKvVxFmK-Z1A"
              className="text-copy-highlight no-underline"
            >
              {strings.youtube}
            </a>
          </li>
          <li className="pr-2">
            <a
              href="https://discord.gg/hdFfgg7"
              className="text-copy-highlight no-underline"
            >
              {strings.discord}
            </a>
          </li>
          <li className="pr-2">
            <a
              href="https://www.facebook.com/popitalk"
              className="text-copy-highlight no-underline"
            >
              {strings.facebook}
            </a>
          </li>
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
            className="bg-background-secondary hover:bg-hover-highlight p-2 rounded-md"
          />
        </a>
        <a href="https://www.patreon.com/Popitalk">
          <Button
            imageButton
            imageButtonSrc={patreonLogo}
            imageButtonClassName="w-6"
            imageButtonSpan={strings.becomeAPatron}
            imageButtonSpanClassName="text-xs text-copy-primary ml-1"
            className="bg-background-secondary hover:bg-hover-highlight p-2 rounded-md"
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
