import React, { useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//css
import "../../styles/authComponents/Profile.css";

import { NavLink } from "react-router-dom";
import { customHistory } from "../../history/history";

export const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);
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
            <i
              className="bars blue icon"
              onMouseDown={(e) => {
                e.stopPropagation();
                if (!showMenu) setShowMenu(!showMenu);
              }}
              id="profile-component-menu-icon"
            >
              &nbsp;Menu
            </i>
          </div>
        </div>
        <div className="ui divider row" id="profile-component-divider"></div>
        {showMenu ? (
          <div
            id="nav-menu"
            ref={menuContainerRef}
            tabIndex={0}
            onBlur={(e: any) => {
              e.stopPropagation();
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setShowMenu(false);
              }
            }}
            onMouseDown={(e: any) => {
              e.stopPropagation();
              const elementHref = e.target?.getAttribute("href");
              /* prettier-ignore */
              if(typeof elementHref === "string"){
                customHistory.push(elementHref);
                }
            }}
          >
            <NavLink to="/dashboard">
              <i className="settings icon"></i>Dashboard
            </NavLink>
            <NavLink to="/enter-trades">
              <i className="circular users blue icon"></i>Add Trades
            </NavLink>
            <NavLink to="/trade-table">
              <i className="table blue icon"></i>Trades Table
            </NavLink>
          </div>
        ) : null}
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
