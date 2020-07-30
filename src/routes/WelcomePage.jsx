import React from "react";
import CreateNewAccountForm from "../comp/CreateNewAccountForm";
import Footer from "../comp/Footer";
import WelcomeVideo from "../assets/popitalkVideo.mp4";

function WelcomePage(props) {
  return (
    <div className="w-full h-full">
      <section className="flex sm:flex-row flex-col bg-primaryBackground justify-around items-center px-16 pb-10 shadow-xl">
        {/* Welcome Video */}
        <div className="bg-gradient-r-primary rounded-circle p-2 flex items-center lg:w-104 lg:h-104 md:w-84 md:h-84 sm:w-12 sm:h-12">
          <div className="w-full h-full p-2 bg-primaryBackground rounded-circle">
            <div className="flex w-full h-full bg-primaryBackground items-center rounded-circle overflow-hidden">
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "100%"
                }}
              >
                <source src={WelcomeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        {/* Sign up form */}
        <div className="xl:w-102 lg:w-102 md:w-102 sm:w-102 xs:w-full px-4 py-8 sm:rounded-lg sm:shadow-xs hover:shadow-channel md:mx-4 mt-32 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8 bg-primaryBackground">
          <CreateNewAccountForm {...props} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WelcomePage;
