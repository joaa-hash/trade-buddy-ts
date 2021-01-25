import { GetWindowSize } from "../actions";
import { WindowSize } from "../components/Interfaces/index";
import { ActionTypes } from "../actions/types";

const initialState = {
  screenWidth: 320,
  screenHeight: 500,
};

//Todo[] = []  "= []" signifies default value of empty array
export const windowSizeReducer = (
  state: WindowSize = initialState,
  action: GetWindowSize
) => {
  switch (action.type) {
    case ActionTypes.getWindowSize:
      return action.payload;
    default:
      return state;
  }
};
