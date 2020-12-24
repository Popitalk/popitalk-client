import React from "react";
import strings from "../../helpers/localization";

function Footer() {
  // === ClassNames === //
  const listClassName = "space-y-2 sm:text-xs text-md";
  const spanClassName = "mb-6 text-md font-bold text-copy-tertiary";
  const columnClassName = "space-y-4 text-center";

  // === Footer Arrays ===//
  const firstColumn = [
    { path: "https://blog.popitalk.com/", string: strings.aboutPopitalk },
    { path: "https://blog.popitalk.com/blog", string: strings.blog },
    { path: "https://blog.popitalk.com/about-us", string: strings.contact }
  ];

  const secondColumn = [
    {
      path:
        "https://medium.com/popitalk/end-user-license-agreement-and-terms-of-service-dc8a25c0f5d2?source=friends_link&sk=2150df3f6e097d60599c30a5d3e8942a",
      string: strings.termsOfUse
    },
    {
      path:
        "https://medium.com/popitalk/privacy-policy-ab89684edca6?source=friends_link&sk=555c056e49c784af16481f96f8dcbfe3",
      string: strings.privacyPolicy
    },
    {
      path:
        "https://medium.com/popitalk/copyright-policy-872f41dd7856?sk=38c4ab2d90555ed5ee6fe85373e06584",
      string: strings.copyright
    }
  ];

  const thirdColumn = [
    {
      path: "https://discord.gg/hdFfgg7",
      string: strings.discord
    },
    {
      path: "https://twitter.com/PopitalkT",
      string: strings.twitter
    },
    {
      path: "https://www.youtube.com/channel/UCJSjPolz6SiYKvVxFmK-Z1A",
      string: strings.youtube
    },
    {
      path: "https://www.facebook.com/popitalk",
      string: strings.facebook
    }
  ];

  // === Function to repeat items in a column. `items={array}` === //
  function DirectoryList({ items }) {
    return items.map(item => (
      <ul className={listClassName} key={item.id}>
        <li>
          <a className="text-copy-tertiary no-underline p-1" href={item.path}>
            {item.string}
          </a>
        </li>
      </ul>
    ));
  }

  return (
    <footer className="w-full p-8 bg-gradient-r-primary sm:px-16">
      <div className="flex flex-col sm:flex-row gap-y-12 sm:space-x-20 my-8">
        <div className={columnClassName}>
          <span className={spanClassName}>{strings.company}</span>
          <DirectoryList items={firstColumn} />
        </div>
        <div className={columnClassName}>
          <span className={spanClassName}>{strings.legal}</span>
          <DirectoryList items={secondColumn} />
        </div>
        <div className={columnClassName}>
          <span className={spanClassName}>{strings.community}</span>
          <DirectoryList items={thirdColumn} />
        </div>
      </div>
      <div className="flex justify-center sm:justify-end text-xs mt-12 text-copy-tertiary">
        <p>© 2021 Popitalk, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
