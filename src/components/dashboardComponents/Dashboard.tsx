import React, { Component } from "react";
import { connect } from "react-redux";
//components
import { DashboardTable } from "./DashboardTable";
import { getUserTrades } from "../../actions/index";

import { Profile } from "../authComponents/Profile";
//function
//css
import "../../styles/dashboardComponents/Dashboard.css";
//types
import { Trade } from "../Interfaces/index";

interface DashboardComp {
  getUserTrades: Function;
  trades: Trade[];
}

class Dashboard extends Component<DashboardComp> {
  state = {
    toggle: true,
  };

  componentDidMount() {
    this.props.getUserTrades();
  }

  render() {
    return (
      <div className="ui container">
        <Profile />
        <div className="ui icon header" style={{ color: "white" }}>
          <i className={`settings icon`}></i>
          <h1 className="ui h1">Dashboard</h1>
        </div>
        <div className={`ui blue three item inverted menu`}>
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
          <div className="item"></div>
        </div>
        <div className="ui padded segment" id="dashboard-display">
          {this.state.toggle ? (
            this.props.trades.length > 0 ? (
              <DashboardTable trades={this.props.trades} />
            ) : (
              "no trades at this time"
            )
          ) : (
            "<DashboardAnalysis analysis={this.props.analysis} />"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: { trades: Trade[] }) => {
  return {
    trades: state.trades,
  };
};

export default connect(mapStateToProps, {
  getUserTrades,
})(Dashboard);