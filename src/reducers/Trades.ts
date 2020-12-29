import { DeleteTradeAction, GetTradesAction, UpdateTrade } from "../actions";
import { Trade } from "../components/Interfaces/index";
import { ActionTypes } from "../actions/types";

//Todo[] = []  "= []" signifies default value of empty array
export const tradeReducer = (
  state: Trade[] = [],
  action: GetTradesAction | DeleteTradeAction | UpdateTrade
) => {
  switch (action.type) {
    case ActionTypes.getUserTrades:
      return [...action.payload];
    case ActionTypes.deleteTrade:
      return [...action.payload];
    case ActionTypes.updateTrade:
      return [...action.payload];
    default:
      return state;
  }
};
