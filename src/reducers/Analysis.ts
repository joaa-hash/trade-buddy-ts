import { GetAnalysis } from "../actions";
import { AnalysisProps } from "../components/Interfaces/index";
import { ActionTypes } from "../actions/types";

//Todo[] = []  "= []" signifies default value of empty array
export const analysisReducer = (
  state: AnalysisProps = {},
  action: GetAnalysis
) => {
  switch (action.type) {
    case ActionTypes.getAnalysis:
      return action.payload;
    default:
      return state;
  }
};
