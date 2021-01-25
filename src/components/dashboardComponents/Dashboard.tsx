import React, { Component } from "react";
import { connect } from "react-redux";
//components
import { DashboardTable } from "./DashboardTable";
import { createUser, getUserTrades, getAnalysis } from "../../actions/index";

import { Profile } from "../authComponents/Profile";
//function
//css
import "../../styles/dashboardComponents/Dashboard.css";
//types
import { AnalysisProps, Trade, WindowSize } from "../Interfaces/index";
import { Link } from "react-router-dom";
import { DashboardAnalysis } from "./DashboardAnalysis";
import { getTotalAnalysis } from "./dashboardFunctions";
import { mq768 } from "../generalFunctions";

interface DashboardComp {
  getUserTrades: Function;
  getAnalysis: Function;
  trades: Trade[];
  analysis: AnalysisProps;
  wS: WindowSize;
}

class Dashboard extends Component<DashboardComp> {
  state = {
    toggle: true,
  };

  componentDidMount() {
    this.props.getUserTrades();
    this.props.getAnalysis(getTotalAnalysis());
  }

  render() {
    return (
      <div className="ui container">
        <Profile />
        <div className="ui icon header" style={{ color: "white" }}>
          <i className={`settings icon`}></i>
          <h1 className="ui h1">Dashboard</h1>
        </div>
        <div
          className={`ui blue three item inverted ${mq768(
            this.props.wS.screenWidth,
            "massive"
          )} menu`}
        >
          <div
            className="item item-hover"
            onClick={() => this.setState({ toggle: true })}
          >
            Trades
          </div>
          <div
            className="item"
            onClick={() => this.setState({ toggle: false })}
          >
            Analysis
          </div>
          <div className="item">
            <Link to="/enter-trades">Add Trades</Link>
          </div>
        </div>
        <div className="ui padded segment" id="dashboard-display">
          {this.state.toggle ? (
            this.props.trades.length > 0 ? (
              <DashboardTable trades={this.props.trades} />
            ) : (
              "no trades at this time"
            )
          ) : (
            <DashboardAnalysis analysis={this.props.analysis} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: {
  trades: Trade[];
  analysis: AnalysisProps;
  windowSize: WindowSize;
}) => {
  return {
    trades: state.trades,
    analysis: state.analysis,
    wS: state.windowSize,
  };
};

export default connect(mapStateToProps, {
  createUser,
  getUserTrades,
  getAnalysis,
})(Dashboard);
