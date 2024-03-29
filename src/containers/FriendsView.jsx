import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// Localization
import strings from "../localization/strings";

function FriendsView() {
  const headerStyle = "text-4xl text-copy-primary";
  const stepLayoutStyle = "flex flex-col items-start py-4 space-y-2";
  const stepHeaderStyle = "text-copy-primary text-lg font-bold";
  const stepParaStyle = "text-copy-primary";

  return (
    <div className="flex flex-col justify-center items-center sm:items-start relative py-4 px-8 sm:px-12 md:px-16 lg:px-20 w-full h-full rounded-md bg-background-secondary overflow-y-auto">
      <div className="flex flex-col sm:flex-row items-center space-x-4 mb-2">
        <FontAwesomeIcon icon="user-friends" className={headerStyle} />
        <h1 className={headerStyle}>{strings.welcomeToDR}</h1>
      </div>
      <h2 className="flex text-xl text-copy-secondary space-x-2 mb-12">
        {strings.DRSubtitle}
      </h2>
      <div className={stepLayoutStyle}>
        <h3 className={stepHeaderStyle}>Step 1.</h3>
        <p className={stepParaStyle}>{strings.DRStepOne}</p>
      </div>
      <div className={stepLayoutStyle}>
        <h3 className={stepHeaderStyle}>Step 2.</h3>
        <p className={stepParaStyle}>{strings.DRStepTwo}</p>
      </div>
      <div className={stepLayoutStyle}>
        <h3 className={stepHeaderStyle}>Step 3.</h3>
        <p className={stepParaStyle}>{strings.DRStepThree}</p>
      </div>
    </div>
  );
}

export default FriendsView;
