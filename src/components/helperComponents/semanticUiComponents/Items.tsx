import React, { Component } from "react";
//css
import "../../../styles/helperComponents/semanticUiComponents/Items.css";

class Items extends Component {
  render() {
    return (
      <div className="ui padded segment" id="items-page-main-container">
        <div
          className="ui segment unstackable items sixteen wide column"
          id="item-page-items-container"
        >
          <div className="item">
            <div className="image">
              <i className="chart line icon huge yellow"></i>
            </div>
            <div className="middle aligned content">
              <div className="header">Enter Prior Traded Stocks</div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <i className="balance scale huge icon yellow"></i>
            </div>
            <div className="middle aligned content">
              <div className="header">View Formatted Trades</div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <i className="percent huge icon yellow"></i>
            </div>
            <div className="middle aligned content">
              <div className="header">Analyzer will return Progress</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
