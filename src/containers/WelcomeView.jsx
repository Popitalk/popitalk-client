import React from "react";
import { useDispatch } from "react-redux";
import Helmet from "react-helmet";
// Components
import WelcomeIntro from "../components/Welcome/WelcomeIntro";
import DescriptionSection from "../components/Welcome/DescriptionSection";
import WelcomeFooter from "../components/Welcome/WelcomeFooter";
// Redux
import { openCreateNewAccountModal } from "../redux";
// Localization
import strings from "../localization/strings";

function WelcomePage() {
  const dispatch = useDispatch();

  const openModal = () => dispatch(openCreateNewAccountModal());

  return (
    <div className="w-full h-full overflow-y-auto">
      <WelcomeIntro openModal={openModal} />
      <DescriptionSection />
      <WelcomeFooter />
      <Helmet>
        <meta charSet="UFT-8" />
        <title>{strings.loginPageTitle}</title>
        <meta name="description" content={strings.loginPageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={strings.mainKeywords} />
        <meta
          data-react-helmet="true"
          property="og:title"
          content={strings.loginPageTitle}
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content={strings.loginPageDescription}
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content={
            strings.location === "kr"
              ? "https://i.ibb.co/NFyVwQL/og-Image-KR.png"
              : "https://i.ibb.co/h1tcFRP/ogImage.png"
          }
        />
      </Helmet>
    </div>
  );
}

export default WelcomePage;
