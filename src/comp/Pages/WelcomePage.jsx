import React from "react";
import SiteHeaderWelcome from "../SiteHeaderWelcome";
import CreateNewAccountForm from "../CreateNewAccountForm";
import Footer from "../Footer";
import Welcome from "../../assets/welcome.png";
import "./welcomePage.css";

function WelcomePage() {
  return (
    <>
      <div className="header-body-container md:h-screen flex flex-col">
        <SiteHeaderWelcome />
        <section className="h-full z-10 relative shadow-account rounded-b-xl bg-primaryBackground flex items-center flex-col sm:pt-12 md:flex-row md:justify-around lg:justify-around xl:px-24">
          <div className="flex justify-center w-2/3 md:h-auto md:w-auto md:mx-5">
            <img src={Welcome} alt="Welcome" />
          </div>
          <div className="account-form px-4 py-8 md:border md:rounded-lg md:border-primaryBorder md:shadow-account md:mx-5">
            <CreateNewAccountForm />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default WelcomePage;
