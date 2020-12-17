import React, { Component } from "react";
import { Link } from "react-router-dom";
//css
import "../styles/Footer.css";

import logo from "../media/logo.gif";

export class Footer extends Component {
  render() {
    return (
      <div className="ui container" id="footer">
        <div
          className="ui centered padded nonstackable grid"
          id="footer-container-nonstackable"
        >
          <div
            className="eight wide mobile six wide tablet eight wide computer column"
            id="footer-header"
          >
            <img src={logo} alt="logo" className="" id="footer-logo" />
          </div>
          <div
            id="footer-nav"
            className="eight wide mobile ten wide tablet column"
          >
            <div id="footer-first-nav-set">
              <Link to="/dashboard">
                <i className="settings icon"></i>Dashboard
              </Link>
              <Link to="/enter-trades">
                <i className="users blue icon"></i>Add Trades
              </Link>
            </div>
            <div id="footer-second-nav-set">
              <Link to="/trade-table">
                <i className="table blue icon"></i>Trades Table
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
