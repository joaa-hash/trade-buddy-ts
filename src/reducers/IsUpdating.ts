import { IsUpdateAction } from "../actions";
import { ActionTypes } from "../actions/types";

//Todo[] = []  "= []" signifies default value of empty array
export const isUpdatingReducer = (
  state: Boolean | undefined = false,
  action: IsUpdateAction
) => {
  switch (action.type) {
    case ActionTypes.setUpdating:
      return action.payload;
    default:
      return state;
  }
};
