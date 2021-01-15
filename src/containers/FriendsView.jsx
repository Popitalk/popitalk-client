import React from "react";
import { useSelector } from "react-redux";
import Helmet from "react-helmet";

// Localization
import strings from "../localization/strings";

function FriendsView() {
  const isRemoved = useSelector(state => state.ui.isRemoved);

  return (
    <div
      className={`${
        isRemoved === true && "hidden"
      } relative p-4 w-full h-full rounded-md bg-background-secondary overflow-auto`}
    >
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

export default FriendsView;
