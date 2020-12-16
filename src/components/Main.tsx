import React, { Component } from "react";
//components
import Items from "./helperComponents/semanticUiComponents/Items";
import LoginButton from "./helperComponents/LoginButton";
//css
import "../styles/helperComponents/semanticUiComponents/Main.css";

import logo from "../media/logo.gif";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="sixteen wide column">
          {" "}
          <img src={logo} alt="logo" id="main-page-logo" />
        </div>
        <div className="sixteen wide padded column">
          {" "}
          <h2 className="ui subheader" id="main-page-subheader">
            Trade better with Trade Buddy
          </h2>
        </div>

        <div
          className="ui one column sixteen wide centered grid"
          style={{ marginBottom: "3em" }}
        >
          <LoginButton />
          <div
            className="ui horizontal divider"
            style={{ color: "white" }}
            id="main-page-divider"
          >
            Or
          </div>
          <Link
            to="/dashboard"
            className="ui blue huge button ten wide four wide tablet four wide computer column centered row"
          >
            Dashboard
          </Link>
        </div>
        <Items />
      </div>
    );
  }
}

export default Main;
