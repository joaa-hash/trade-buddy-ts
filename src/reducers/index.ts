import { combineReducers } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import { tradeReducer } from "./Trades";
import { isUpdatingReducer } from "./IsUpdating";
import { AnalysisProps, Trade } from "../components/Interfaces";
import { analysisReducer } from "./Analysis";

export interface StoreState {
  form: FormStateMap;
  trades: Trade[];
  analysis: AnalysisProps;
  isUpdating: Boolean;
}

export const reducers = combineReducers<StoreState>({
  form: formReducer,
  trades: tradeReducer,
  analysis: analysisReducer,
  isUpdating: isUpdatingReducer,
});
