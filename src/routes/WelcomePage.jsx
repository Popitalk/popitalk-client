import React from "react";
import SiteHeaderWelcome from "../comp/SiteHeaderWelcome";
import CreateNewAccountForm from "../comp/CreateNewAccountForm";
import Footer from "../comp/Footer";
import Welcome from "../assets/welcome.png";

function WelcomePage(props) {
  return (
    <div className="w-screen h-screen">
      <div className="h-32 w-screen bg-primaryBackground"></div>
      <section className="rounded-b-xl bg-primaryBackground flex flex-col items-center -mt-24 sm:flex-row sm:justify-around lg:justify-around xl:px-20">
        <div className="relative pb-screen flex items-center justify-center md:w-1/2 h-full sm:w-0">
          <img
            src={Welcome}
            alt="Welcome"
            className="absolute flex justify-center md:w-4/5 sm:w-0"
          />
        </div>
        <div className="md:w-1/3 sm:w-full px-4 py-8 sm:border sm:rounded-lg sm:border-primaryBorder sm:shadow-account md:mx-4 sm:m-4 sm:mb-12">
          <CreateNewAccountForm {...props} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WelcomePage;
