import React, { ReactNode } from "react";
import { customHistory } from "./history/history";
import { Auth0Provider } from "@auth0/auth0-react";

interface IProps {
  children: ReactNode;
}

export const Auth0ProviderWithHistory = ({ children }: IProps) => {
  const onRedirectCallback = (appState: any) => {
    customHistory.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
      clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
      redirectUri="https://main--trade-buddy.netlify.app/"
      onRedirectCallback={onRedirectCallback}
      audience={`${process.env.REACT_APP_AUTH0_AUDIENCE}`}
    >
      {children}
    </Auth0Provider>
  );
};
