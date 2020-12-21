import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { deleteTrade } from "../../actions/index";
//css
import "..//../styles/tableComponents/TradeTableModal.css";

export const TradeTableModal = (props: any) => {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div
      onClick={(e) => e.stopPropagation()}
      className="ui standard modal"
      id="trade-table-modal-main-window"
    >
      <div className="header" id="trade-table-modal-header">
        Trade Delete <i className="tasks icon"></i>
      </div>
      <div className="content" id="trade-table-modal-content">
        <p>Are you sure you want to delete this trade?</p>
      </div>
      <div className="actions" id="trade-table-modal-actions">
        <button
          className="ui approve red button"
          onClick={() => dispatch(deleteTrade(props.match.params.id))}
        >
          Delete
        </button>
        <button className="ui button" onClick={() => props.history.goBack()}>
          Cancel
        </button>
      </div>
    </div>,
    document.getElementById("tradeTableModal")!
  );
};
