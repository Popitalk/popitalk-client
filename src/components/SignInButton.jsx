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
      size="md"
      icon="user-circle"
      styleNoneContent={strings.createNewAccountButton}
      styleNoneContentClassName="text-sm"
      className="space-x-2 text-copy-tertiary bg-gradient-br-button py-2 px-4 rounded-md"
      type="submit"
      onClick={() => history.push("/welcome")}
      analyticsString="Login Button: SiteHeaderWelcome"
    >
      {strings.loginButton}
    </Button>
  );
};

export default SignInButton;
