import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserTrades, deleteTrade, setUpdating } from "../../actions/index";
import { dateFixer } from "../generalFunctions/index";
import { MyFormProps } from "../Interfaces";
//components
import { Profile } from "../authComponents/Profile";
//css
import "../../styles/tableComponents/TradeTable.css";
//types
import { Trade } from "../Interfaces/index";

interface TradeTableProps {
  getUserTrades: Function;
  deleteTrade: Function;
  setUpdating: Function;
  trades: Trade[];
}

class _TradeTable extends Component<TradeTableProps> {
  renderTableAttributes = () => {
    let { trades } = this.props;

    let tradeArrayClone = [...trades];
    let tableResults = tradeArrayClone.map(
      (trade: MyFormProps, index: number) => {
        return (
          <tr key={index}>
            <td className="center aligned">{trade.ticker}</td>
            <td className="center aligned">{trade.number_of_shares}</td>
            <td className="center aligned">{trade.day_or_swing}</td>
            <td className="center aligned">
              {dateFixer(trade.start_date) || (
                <span className="not-applicable-span">n/a</span>
              )}
            </td>
            <td className="center aligned">
              {dateFixer(trade.end_date) || (
                <span className="not-applicable-span">n/a</span>
              )}
            </td>
            <td className="center aligned">{trade.short_or_long}</td>
            <td className="center aligned">
              {trade.buy_price ? (
                <span>${trade.buy_price.toFixed(2)}</span>
              ) : (
                <span className="not-applicable-span">n/a</span>
              )}
            </td>
            <td className="center aligned">
              {trade.sell_price ? (
                <span>${trade.sell_price.toFixed(2)}</span>
              ) : (
                <span className="not-applicable-span">n/a</span>
              )}
            </td>
            <td className="center aligned">
              {trade.short_price ? (
                <span>${trade.short_price.toFixed(2)}</span>
              ) : (
                <span className="not-applicable-span">n/a</span>
              )}
            </td>
            <td className="center aligned">
              {trade.cover_price ? (
                <span>${trade.cover_price.toFixed(2)}</span>
              ) : (
                <span className="not-applicable-span">n/a</span>
              )}
            </td>
            <td className="center aligned" id="trade-table-button-td">
              <Link
                className="mini ui button"
                to={`/enter-trades/${trade.id}`}
                onClick={() => this.props.setUpdating(true)}
              >
                Edit
              </Link>
            </td>
            <td className="center aligned" id="trade-table-button-td">
              <Link
                className="mini ui red button"
                to={`/trade-table-modal/${trade.id}`}
              >
                Delete
              </Link>
            </td>
          </tr>
        );
      }
    );

    return tableResults;
  };

  render() {
    return (
      <div className="ui container">
        <Profile />
        <div className="ui padded centered grid" id="trade-table-page">
          <h2
            className="ui icon header sixteen wide column"
            id="trade-table-h2"
          >
            <i className="table icon" id="white"></i>
            <div className="content" id="trade-table-header">
              Trade Table
              <div className="sub header" id="trade-table-sub-header"></div>
            </div>
          </h2>
          <div>
            <table
              className="ui inverted unstackable blue table"
              id="trade-table-table"
            >
              <thead>
                <tr>
                  <th className="center aligned green">Ticker:</th>
                  <th className="center aligned"># of Shares:</th>
                  <th className="center aligned">Duration:</th>
                  <th className="center aligned">Start Date:</th>
                  <th className="center aligned">End Date:</th>
                  <th className="center aligned">Type of Trade:</th>
                  <th className="center aligned">Buy Price:</th>
                  <th className="center aligned">Sell Price:</th>
                  <th className="center aligned">Short Price:</th>
                  <th className="center aligned">Cover Price:</th>
                  <th className="center aligned"></th>
                </tr>
              </thead>
              <tbody>{this.renderTableAttributes()}</tbody>
            </table>
          </div>
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

export const TradeTable = connect(mapStateToProps, {
  getUserTrades,
  deleteTrade,
  setUpdating,
})(_TradeTable);
