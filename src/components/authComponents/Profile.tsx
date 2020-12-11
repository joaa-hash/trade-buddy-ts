import React, { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//css
import "../../styles/authComponents/Profile.css";

export const Profile = () => {
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const { user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    menuContainerRef.current?.focus();
  });

  return (
    (isAuthenticated && (
      <div className="ui padded grid" id="profile-component">
        <div className="two column row">
          <h5 className="left floated left aligned column">Hi, {user.name}</h5>
          <button
            className="ui button yellow right floated four wide column"
            id="profile-component-logout-button"
            onClick={() => logout()}
          >
            Sign Out
          </button>
        </div>
        <div className="two column row">
          <div className="left floated left aligned column">
            <i className="bars blue icon" id="profile-component-menu-icon">
              &nbsp;Menu
            </i>
          </div>
        </div>
        <div className="ui divider row" id="profile-component-divider"></div>
      </div>
    )) || (
      <div className="ui segment">
        <p></p>
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      </div>
    )
  );
};
