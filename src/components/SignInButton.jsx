import React from "react";
import Button from "./Controls/Button";
import strings from "../localization/strings";
import { useHistory } from "react-router";

const SignInButton = () => {
  const history = useHistory();

  return (
    <Button
      hoverable
      styleNone
      styleNoneContent={strings.createNewAccountButton}
      icon="user-circle"
      className="text-copy-link py-2 px-4 rounded-md border-copy-link border text-sm space-x-2"
      onClick={() => history.push("/welcome")}
    />
  );
};

export default SignInButton;
