import { combineReducers } from "redux";
import { tradeReducer } from "./Trades";
import { Trade } from "../components/Interfaces";

export interface StoreState {
  trades: Trade[];
}

export const reducers = combineReducers<StoreState>({
  trades: tradeReducer,
});
