import React from "react";
import SiteHeaderWelcome from "./SiteHeaderWelcome";
import CreateNewAccountForm from "./CreateNewAccountForm";
import Footer from "./Footer";
import Welcome from "../assets/welcome.png";

function WelcomePage() {
  return (
    <>
      <SiteHeaderWelcome />
      <div className="relative">
        <section className="z-10 relative shadow-2xl rounded-b-xl bg-primaryBackground flex items-center py-10 flex-col sm:flex-row sm:justify-around">
          <div className="flex-shrink flex justify-center w-2/3 sm:w-1/3">
            <img src={Welcome} alt="Welcome" />
          </div>
          <div className="px-4 py-8 sm:border sm:rounded-lg sm:border-primaryBorder sm:shadow-lg">
            <CreateNewAccountForm />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default WelcomePage;
