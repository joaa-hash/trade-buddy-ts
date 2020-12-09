import React, { ReactNode } from "react";
import { customHistory } from "./history/history";
import { Auth0Provider } from "@auth0/auth0-react";
import { keys } from "./keys/keys";

interface IProps {
  children: ReactNode;
}

export const Auth0ProviderWithHistory = ({ children }: IProps) => {
  const onRedirectCallback = (appState: any) => {
    customHistory.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={keys.domain}
      clientId={keys.clientId}
      redirectUri="http://localhost:3000/dashboard"
      onRedirectCallback={onRedirectCallback}
      audience="http://localhost:8080/api/authorize"
    >
      {children}
    </Auth0Provider>
  );
};
