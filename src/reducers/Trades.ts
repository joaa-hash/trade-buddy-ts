import { GetTradesAction } from "../actions";
import { Trade } from "../components/Interfaces/index";
import { ActionTypes } from "../actions/types";

//Todo[] = []  "= []" signifies default value of empty array
export const tradeReducer = (state: Trade[] = [], action: GetTradesAction) => {
  switch (action.type) {
    case ActionTypes.getUserTrades:
      return [...action.payload];
    default:
      return state;
  }
};
