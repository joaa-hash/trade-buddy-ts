import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//actions
import { getAnalysis } from "../../actions/index";
//component
import { Profile } from "../authComponents/Profile";
//general functions
import { dateFixer } from "../generalFunctions/index";
//css
import "../../styles/analysisComponents/Analysis.css";
//types
import { AnalysisProps } from "../Interfaces/index";

interface AnalysisComp {
  getAnalysis: Function;
  analysis: AnalysisProps;
}

class _Analysis extends Component<AnalysisComp> {
  getTotalAnalysis = () => {
    let endDateDate = new Date();
    let endDateYear = `${endDateDate.getFullYear()}`;
    let endDateMonth = `0${endDateDate.getMonth() + 1}`.slice(-2);
    let endDateDay = `0${endDateDate.getDate()}`.slice(-2);
    let endDateString = `${endDateYear}-${endDateMonth}-${endDateDay}`;

    const formData = {
      startDate: "1900-01-01",
      endDate: endDateString,
      typeOfTrade: "both",
    };

    this.props.getAnalysis(formData);
  };

  render() {
    const {
      numberOfTrades,
      winningTrades,
      losingTrades,
      dayTrades,
      swingTrades,
      typeOfTrade,
      startDate,
      endDate,
    } = this.props.analysis;
    return (
      <div className="ui container">
        <Profile />
        <div className="ui centered grid">
          <div className="ui icon header" id="analysis-icon-header">
            <i className="chart bar icon"></i>
            <h1 className="ui h1">Analysis</h1>
            <button onClick={this.getTotalAnalysis} id="analysis-button">
              Total
            </button>
            <Link to="/analysis-modal" id="analysis-button">
              Analysis Options
            </Link>
          </div>
          {Object.entries(this.props.analysis).length ? (
            (
              <Fragment>
                <div className="one column centered row">
                  <div className="centered column" id="analysis-dates-column">
                    <div>Date(s)</div>
                    {startDate === "1900-01-01" ? (
                      <div id="analysis-dates">
                        all trades until
                        <span id="analysis-date-span">
                          {" "}
                          {dateFixer(endDate)}
                        </span>
                      </div>
                    ) : (
                      <div id="analysis-dates">
                        {endDate ? (
                          <div>
                            <div id="analysis-date-span">
                              {dateFixer(startDate)}{" "}
                            </div>
                            <div id="analysis-date-through">through</div>
                            <div id="analysis-date-span">
                              {" "}
                              {dateFixer(endDate)}
                            </div>
                          </div>
                        ) : (
                          <div>
                            All trades for{" "}
                            <span id="analysis-date-span">
                              {dateFixer(startDate)}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>{" "}
                <div>
                  <div className="grey statistic">
                    <div className="value">{numberOfTrades}</div>
                    <div className="label" id="analysis-label">
                      # of Trades
                    </div>
                    <div className="centered column">
                      <i className="handshake outline yellow large icon"></i>
                    </div>
                  </div>
                </div>
                {typeOfTrade == "both" ? (
                  <div>
                    <div className="grey statistic" id="analysis-statistic">
                      <div className="value">{dayTrades}</div>
                      <div className="label" id="analysis-label">
                        Day Trades
                      </div>
                      <div className="centered column">
                        <i className="handshake outline yellow large icon"></i>
                      </div>
                    </div>{" "}
                    <div className="grey statistic" id="analysis-statistic">
                      <div className="value">{swingTrades}</div>
                      <div className="label" id="analysis-label">
                        Swing Trades
                      </div>
                      <div className="centered column">
                        <i className="handshake outline yellow large icon"></i>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="green statistic" id="analysis-statistic">
                      <div className="value">
                        {typeOfTrade === "Day Trade" ? dayTrades : swingTrades}
                      </div>
                      <div className="label" id="analysis-label">
                        {typeOfTrade && `${typeOfTrade}s`}
                      </div>
                      <div className="centered column">
                        <i className="handshake outline yellow large icon"></i>
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  <div className="green statistic" id="analysis-statistic">
                    <div className="value">{winningTrades}</div>
                    <div className="label" id="analysis-label">
                      Winning Trades
                    </div>
                    <div className="centered column">
                      <i className="handshake outline yellow large icon"></i>
                    </div>
                  </div>
                  <div className="red statistic" id="analysis-statistic">
                    <div className="value">{losingTrades}</div>
                    <div className="label" id="analysis-label">
                      Losing Trades
                    </div>
                    <div className="centered column">
                      <i className="handshake outline yellow large icon"></i>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) || (
              <div className="ui segment">
                <p></p>
                <div className="ui active dimmer">
                  <div className="ui loader"></div>
                </div>
              </div>
            )
          ) : (
            <div>Click button above to analyze</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: { analysis: any }) => {
  return {
    analysis: state.analysis,
  };
};

export const Analysis = connect(mapStateToProps, { getAnalysis })(_Analysis);
