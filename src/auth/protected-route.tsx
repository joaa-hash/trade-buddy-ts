import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loader } from "../components/helperComponents/semanticUiComponents/Loader";

export const ProtectedRoute = ({ component, ...args }: any) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loader />,
    })}
    {...args}
  />
);
