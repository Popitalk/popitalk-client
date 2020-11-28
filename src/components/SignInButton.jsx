import React from "react";
import Button from "./Controls/Button";
import strings from "../helpers/localization";
import { useHistory } from "react-router";

const SignInButton = () => {
  const history = useHistory();

  return (
    <Button
      actionButton
      size="sm"
      type="submit"
      onClick={() => history.push("/")}
      analyticsString="Login Button: SiteHeaderWelcome"
    >
      {strings.loginButton}
    </Button>
  );
};

export default SignInButton;
