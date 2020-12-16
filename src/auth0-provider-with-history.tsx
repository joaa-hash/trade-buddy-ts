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
      domain={`${process.env.AUTH0_DOMAIN}`}
      clientId={`${process.env.AUTH0_CLIENT_ID}`}
      redirectUri="https://michael-williamson.github.io/trade_buddy_ts/dashboard"
      onRedirectCallback={onRedirectCallback}
      audience={`${process.env.AUTH0_AUDIENCE}`}
    >
      {children}
    </Auth0Provider>
  );
};
