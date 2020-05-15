import React from "react";
import SiteHeaderWelcome from "./SiteHeaderWelcome";
import CreateNewAccountForm from "./CreateNewAccountForm";

import Welcome from "../assets/welcome.png";

function WelcomePage() {
  return (
    <>
      <SiteHeaderWelcome />
      <div className="relative">
        <section className="relative z-10 flex items-center justify-center py-16 mt-4 space-x-16 shadow-2xl rounded-b-xl bg-primaryBackground">
          <img src={Welcome} alt="Welcome" />
          <CreateNewAccountForm />
        </section>
        <footer className="absolute inset-x-0 px-16 py-8 -mt-4 bg-gradient-r-primary text-tertiaryText">
          <div className="flex space-x-8">
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
          <div className="flex justify-end mt-8">
            <p>© 2020 Popitalk, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default WelcomePage;
