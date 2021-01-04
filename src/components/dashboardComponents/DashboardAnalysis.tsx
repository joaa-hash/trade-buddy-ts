import React, { Component } from "react";
import { Link } from "react-router-dom";
//css
import "../../styles/dashboardComponents/DashboardAnalysis.css";
//types
import { AnalysisProps } from "../Interfaces/index";

interface DashboardAnalysisProps {
  analysis: AnalysisProps;
}

export class DashboardAnalysis extends Component<DashboardAnalysisProps> {
  render() {
    const { numberOfTrades, winningTrades, losingTrades } = this.props.analysis;
    return (
      (
        <div className="ui centered padded grid">
          <h1 className="ui yellow header">Quick Analysis</h1>
          <Link to="/analysis" className="">
            To Complete Analysis
          </Link>
          <Link
            to="/analysis"
            className="ui blue button"
            id="dashboard-analysis-go-link"
          >
            Go!
          </Link>
          <div className="ui divider row" id="dashboard-analysis-divider"></div>
          <div className="ui statistics centered row">
            <div className="grey statistic">
              <div className="value">{numberOfTrades}</div>
              <div className="label" id="dashboard-analysis-label">
                # of Trades
              </div>
            </div>
            <div className="green statistic">
              <div className="value">{winningTrades}</div>
              <div className="label" id="dashboard-analysis-label">
                Winning Trades
              </div>
            </div>
            <div className="red statistic">
              <div className="value">{losingTrades}</div>
              <div className="label" id="dashboard-analysis-label">
                Losing Trades
              </div>
            </div>
          </div>
        </div>
      ) || (
        <div className="ui segment">
          <p></p>
          <div className="ui active dimmer">
            <div className="ui loader"></div>
          </div>
        </div>
      )
    );
  }
}
