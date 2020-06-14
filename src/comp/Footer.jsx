import React from "react";

function Footer() {
  return (
    <footer className="w-full px-4 py-8 -mt-4 bg-gradient-r-primary text-tertiaryText sm:px-16">
      <div className="grid grid-cols-2 row-gap-6 sm:flex sm:justify-start sm:space-x-20 sm:ml-10 sm:mt-5">
        <div className="space-y-2 text-center">
          <span className="mb-4 text-lg font-bold">Company</span>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://about.popitalk.com/"
              >
                About Popitalk
              </a>
            </li>
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://medium.com/popitalk"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://about.popitalk.com/"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-center">
          <span className="mb-4 text-lg font-bold">Legal</span>
          <ul className="space-y-2 text-sm text-tertiaryText no-underline">
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://medium.com/popitalk/end-user-license-agreement-and-terms-of-service-dc8a25c0f5d2?source=friends_link&sk=2150df3f6e097d60599c30a5d3e8942a"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://medium.com/popitalk/privacy-policy-ab89684edca6?source=friends_link&sk=555c056e49c784af16481f96f8dcbfe3"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://medium.com/popitalk/copyright-policy-872f41dd7856?sk=38c4ab2d90555ed5ee6fe85373e06584"
              >
                Copyright
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-center">
          <span className="mb-4 text-lg font-bold">Community</span>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://discord.gg/hdFfgg7"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://twitter.com/PopitalkT"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="text-tertiaryText no-underline"
                href="https://www.youtube.com/channel/UCJSjPolz6SiYKvVxFmK-Z1A"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end text-sm mt-8">
        <p>© 2020 Popitalk, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
