import React from "react";
import SiteHeaderWelcome from "../comp/SiteHeaderWelcome";
import CreateNewAccountForm from "../comp/CreateNewAccountForm";
import Footer from "../comp/Footer";
import Welcome from "../assets/welcome.png";

function WelcomePage(props) {
  return (
    <div className="relative">
      <section className="z-10 relative shadow-account rounded-b-xl bg-primaryBackground flex items-center py-10 flex-col sm:flex-row sm:justify-around sm:py-24 md:py-32 lg:justify-around xl:px-24">
        <div className="flex justify-center w-2/3 sm:w-1/3 md:h-full md:w-auto md:mx-5">
          <img src={Welcome} alt="Welcome" />
        </div>
        <div className="px-4 py-8 sm:border sm:rounded-lg sm:border-primaryBorder sm:shadow-account md:mx-5">
          <CreateNewAccountForm {...props} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WelcomePage;
