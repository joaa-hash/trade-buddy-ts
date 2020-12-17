import React, { Component } from "react";
//functions
import { dateFixer } from "../generalFunctions/index";
//types
import { Trade } from "../Interfaces/index";
//css
import "../../styles/dashboardComponents/DashboardTable.css";
import { Link } from "react-router-dom";

interface DashboardTableComp {
  trades: Trade[];
}

export class DashboardTable extends Component<DashboardTableComp> {
  renderTableAttributes = () => {
    let { trades } = this.props;

    return trades
      .slice(-10)
      .map(
        (
          trade: { ticker: string; start_date: string; day_or_swing: string },
          index: number
        ) => {
          return (
            <tr key={index}>
              <td className="center aligned">{trade.ticker}</td>
              <td className="center aligned">{dateFixer(trade.start_date)}</td>
              <td className="center aligned">{trade.day_or_swing}</td>
            </tr>
          );
        }
      );
  };

  render() {
    return (
      <div>
        <Link to="/trade-table" className="" id="dashboard-table-to-main-table">
          To Main Table
        </Link>
        <Link to="/trade-table" className={`ui blue button`}>
          Go!
        </Link>
        <table className="ui unstackable inverted large blue table">
          <thead>
            <tr>
              <th className="center aligned">Ticker</th>
              <th className="center aligned">Date</th>
              <th className="center aligned">Type of Trade</th>
            </tr>
          </thead>
          <tbody>{this.renderTableAttributes()}</tbody>
        </table>
      </div>
    );
  }
}
