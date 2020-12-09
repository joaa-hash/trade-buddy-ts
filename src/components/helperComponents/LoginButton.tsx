import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="ui yellow huge button ten wide four wide tablet four wide computer column centered row"
    >
      Log In
    </button>
  );
};

export default LoginButton;
