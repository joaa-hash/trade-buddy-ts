import { combineReducers } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import { tradeReducer } from "./Trades";
import { Trade } from "../components/Interfaces";

export interface StoreState {
  form: FormStateMap;
  trades: Trade[];
}

export const reducers = combineReducers<StoreState>({
  form: formReducer,
  trades: tradeReducer,
});
