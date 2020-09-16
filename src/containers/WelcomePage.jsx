import React from "react";
import CreateNewAccountForm from "../components/Forms/CreateNewAccountForm";
import Footer from "../components/Footer";
import Helmet from "react-helmet";
import strings from "../helpers/localization";

function WelcomePage(props) {
  return (
    <div className="w-full h-full">
      <section
        className="sm:flex-row sm:py-0 sm:px-16
        // flex flex-col bg-primaryBackground justify-around items-center px-8 py-8 shadow-xl"
      >
        {/* Welcome Video */}
        <div
          className="lg:w-104 lg:h-104 md:w-84 md:h-84 sm:w-40 sm:h-40
          // flex flex-shrink-0 items-center bg-gradient-r-primary rounded-circle p-1"
        >
          <div className="w-full h-full bg-primaryBackground rounded-circle p-1">
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
                <source
                  src="https://popitalk-s3.s3.us-east-2.amazonaws.com/popitalkvideo-88btdo7q-lsr1_EaKU776R.compressed.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag. Please upgrade your
                browser.
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
      <Helmet>
        <meta charSet="UFT-8" />
        <title>{strings.loginPageTitle}</title>
        <meta name="description" content={strings.loginPageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={strings.mainKeywords} />
      </Helmet>
    </div>
  );
}

export default WelcomePage;
