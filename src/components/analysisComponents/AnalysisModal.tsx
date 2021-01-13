import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { customHistory } from "../../history/history";
//components
import DatePicker from "react-datepicker";

import "../../styles/analysisComponents/AnalysisModal.css";
import { getAnalysis } from "../../actions";

export const AnalysisModal = (props: any) => {
  const [singleDay, setSingleDay] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [notChecked, setNotChecked] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (val: any) => {
    val.preventDefault();
    const {
      start_date,
      end_date,
      day_trade,
      swing_trade,
    } = val.target.elements;

    if (!(day_trade?.checked || swing_trade?.checked)) {
      setNotChecked(true);
      return;
    }

    let typeOfTrade = day_trade?.checked
      ? day_trade?.value
      : false || swing_trade?.checked
      ? swing_trade?.value
      : false;

    typeOfTrade =
      day_trade?.checked && swing_trade?.checked ? "both" : typeOfTrade;

    const formData = {
      startDate: start_date.value,
      endDate: end_date?.value,
      typeOfTrade,
    };

    dispatch(getAnalysis(formData));
    customHistory.goBack();
  };

  return ReactDOM.createPortal(
    <div
      onClick={() => customHistory.goBack()}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
        id="analysis-modal-main-window"
      >
        <div className="header" id="analysis-modal-header">
          Analysis Criteria <i className="tasks icon"></i>
        </div>
        <div className="ui padded grid" id="analysis-modal-form-container">
          <form className="ui form" onSubmit={handleSubmit}>
            <h4 className="ui dividing blue header">Date(s)</h4>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="timeline"
                    onChange={() => setSingleDay(!singleDay)}
                    defaultChecked
                  />
                  <label id="analysis-modal-label">Single Day</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="timeline"
                    onChange={() => setSingleDay(!singleDay)}
                  />
                  <label id="analysis-modal-label">Multiple Days</label>
                </div>
              </div>
            </div>
            {singleDay ? (
              <div className="field">
                <label id="analysis-modal-label">Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => {
                    setStartDate(date);
                  }}
                  maxDate={new Date()}
                  name="start_date"
                  dateFormat="yyyy-MM-dd"
                />
              </div>
            ) : (
              <Fragment>
                <div className="field">
                  <label id="analysis-modal-label">Date</label>
                  <DatePicker
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(date: Date) => {
                      setStartDate(date);
                    }}
                    name="start_date"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
                <h4 id="analysis-modal-thru">through</h4>
                <div className="field">
                  <label id="analysis-modal-label">Date</label>
                  <DatePicker
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    maxDate={new Date()}
                    onChange={(date: Date) => {
                      setEndDate(date);
                    }}
                    name="end_date"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
              </Fragment>
            )}
            <h4 className="ui dividing blue header">Duration of Trade</h4>
            <div className="inline field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  className=""
                  name="day_trade"
                  value="Day Trade"
                  defaultChecked
                  onChange={(e) => {
                    e.target.checked && setNotChecked(false);
                  }}
                />
                <label id="analysis-modal-label">Day Trades</label>
              </div>
            </div>
            {notChecked && /* prettier-ignore */ <div className="ui red message">
                at least one field must checked
              </div>}
            <div className="inline field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  className=""
                  name="swing_trade"
                  value="Swing Trade"
                  defaultChecked
                  onChange={(e) => {
                    e.target.checked && setNotChecked(false);
                  }}
                />
                <label id="analysis-modal-label">Swing Trades</label>
              </div>
            </div>
            <div className="actions" id="analysis-modal-actions-container">
              <button className="ui yellow button" type="submit">
                Analyze!!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("deleteModal")!
  );
};
