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
      className="bg-copy-link py-2 px-5 rounded-md text-copy-tertiary"
      onClick={() => history.push("/welcome")}
    />
  );
};

export default SignInButton;
