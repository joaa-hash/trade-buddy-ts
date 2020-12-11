import React from "react";
import "../../../styles/helperComponents/semanticUiComponents/Loader.css";

export const Loader = () => {
  return (
    <div className="ui segment" id="loader-page">
      <p></p>
      <div className="ui active dimmer" id="loader-page-dimmer">
        <div className="ui loader"></div>
      </div>
    </div>
  );
};
