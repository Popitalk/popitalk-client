import React from "react";
import CreateNewAccountForm from "../comp/CreateNewAccountForm";
import Footer from "../comp/Footer";
import WelcomeVideo from "../assets/popitalkVideo.mp4";

function WelcomePage(props) {
  return (
    <div className="w-full h-full">
      <section
        className="sm:flex-row sm:pb-10 sm:pt-0 sm:px-16
        // flex flex-col bg-primaryBackground justify-around items-center px-8 pt-16 shadow-xl"
      >
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
                className="rounded-circle"
              >
                <source src={WelcomeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        {/* Sign up form */}
        <div
          className="sm:w-102 sm:rounded-lg sm:shadow-xs sm:hover:shadow-channel sm:mx-4 sm:my-8 
          // w-full bg-primaryBackground px-4 py-8 my-16 duration-100"
        >
          <CreateNewAccountForm {...props} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WelcomePage;
