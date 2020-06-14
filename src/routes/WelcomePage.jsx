import React from "react";
import CreateNewAccountForm from "../comp/CreateNewAccountForm";
import Footer from "../comp/Footer";
import Welcome from "../assets/welcome.png";

function WelcomePage(props) {
  return (
    <div className="w-screen h-screen">
      <section className="rounded-b-xl bg-primaryBackground flex flex-col sm:flex-row justify-around items-center lg:justify-around p-24">
        <div className="relative flex items-center justify-center md:w-1/2 h-full xs:w-0">
          <img
            src={Welcome}
            alt="Welcome"
            className="absolute flex justify-center xl:w-102 lg:w-102 md:w-102 sm:w-102 xs:w-102"
          />
        </div>
        <div className="xl:w-102 lg:w-102 md:w-102 sm:w-102 xs:w-full px-4 py-8 sm:border sm:rounded-lg sm:border-primaryBorder sm:shadow-account md:mx-4 mt-32 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8">
          <CreateNewAccountForm {...props} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WelcomePage;
