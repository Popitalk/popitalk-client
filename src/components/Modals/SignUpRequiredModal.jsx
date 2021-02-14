import React from "react";
import strings from "../../localization/strings";
import Button from "../Controls/Button";

export default function SignUpRequiredModal({ toWelcome }) {
  return (
    <div className="flex flex-col w-full justify-center space-y-12 h-48 px-8 p-4">
      <h1 className="text-copy-primary w-full">{strings.loginRequired}</h1>
      <div className="flex w-full justify-end">
        <Button
          hoverable
          styleNone
          styleNoneContent={strings.createNewAccountButton}
          icon="user-circle"
          className="bg-copy-link py-2 px-4 rounded-md border-copy-link border space-x-2 text-copy-tertiary"
          onClick={toWelcome}
        />
      </div>
    </div>
  );
}
