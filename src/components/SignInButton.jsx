import React from "react";
import Button from "./Controls/Button";
import strings from "../helpers/localization";
import { useHistory } from "react-router";

const SignInButton = () => {
  const history = useHistory();

  return (
    <Button
      hoverable
      styleNone
      styleNoneContent={strings.createNewAccountButton}
      icon="user-circle"
      className="bg-copy-link text-copy-tertiary py-2 px-4 rounded-lg text-sm space-x-2"
      onClick={() => history.push("/welcome")}
    />
  );
};

export default SignInButton;
