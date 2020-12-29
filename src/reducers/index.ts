import { combineReducers } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import { tradeReducer } from "./Trades";
import { isUpdatingReducer } from "./IsUpdating";
import { Trade } from "../components/Interfaces";

export interface StoreState {
  form: FormStateMap;
  trades: Trade[];
  isUpdating: Boolean;
}

export const reducers = combineReducers<StoreState>({
  form: formReducer,
  trades: tradeReducer,
  isUpdating: isUpdatingReducer,
});
