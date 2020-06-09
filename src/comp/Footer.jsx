import React from "react";

function Footer() {
  return (
    <footer className="w-full px-4 py-8 -mt-4 bg-gradient-r-primary text-tertiaryText sm:px-16">
      <div className="grid grid-cols-2 row-gap-5 sm:flex sm:justify-start sm:space-x-16 sm:ml-10 sm:mt-5">
        <div className="space-y-2 text-center">
          <span className="mb-4 text-lg font-bold">Company</span>
          <ul className="space-y-2 text-sm">
            <li>
              <p>About Popitalk</p>
            </li>
            <li>
              <p>Jobs</p>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-center">
          <span className="mb-4 text-lg font-bold">Legal</span>
          <ul className="space-y-2 text-sm">
            <li>
              <p>Terms of Use</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Copyright</p>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-center">
          <span className="mb-4 text-lg font-bold">Community</span>
          <ul className="space-y-2 text-sm">
            <li>
              <p>Guidelines</p>
            </li>
            <li>
              <p>Support</p>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-center">
          <span className="mb-4 text-lg font-bold">Business</span>
          <ul className="space-y-2 text-sm">
            <li>
              <p>Branding</p>
            </li>
            <li>
              <p>Contact</p>
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
