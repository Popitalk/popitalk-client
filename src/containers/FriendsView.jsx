import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

// Localization
import strings from "../localization/strings";

function FriendsView() {
  const isRemoved = useSelector(state => state.ui.isRemoved);
  const stepLayoutStyle = "flex flex-col items-start py-4 space-y-2";
  const stepHeaderStyle = "text-copy-primary text-lg font-bold";
  const stepParaStyle = "text-copy-primary";
  return (
    <div
      className={`${
        isRemoved === true && "hidden"
      } flex flex-col justify-center items-center sm:items-start relative p-4 sm:px-12 md:px-16 lg:px-20 w-full h-full rounded-md bg-background-secondary overflow-auto`}
    >
      <div className="flex flex-col sm:flex-row items-center space-x-4 mb-2">
        <FontAwesomeIcon
          icon="user-friends"
          className="text-4xl text-copy-primary"
        />
        <h1 className="flex text-4xl text-copy-primary space-x-2">
          {strings.welcomeToDR}
        </h1>
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
