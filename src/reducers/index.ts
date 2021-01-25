import { combineReducers } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import { tradeReducer } from "./Trades";
import { isUpdatingReducer } from "./IsUpdating";
import { AnalysisProps, Trade, WindowSize } from "../components/Interfaces";
import { analysisReducer } from "./Analysis";
import { windowSizeReducer } from "./WindowSize";

export interface StoreState {
  form: FormStateMap;
  trades: Trade[];
  analysis: AnalysisProps;
  windowSize: WindowSize;
  isUpdating: Boolean;
}

export const reducers = combineReducers<StoreState>({
  form: formReducer,
  trades: tradeReducer,
  analysis: analysisReducer,
  windowSize: windowSizeReducer,
  isUpdating: isUpdatingReducer,
});
