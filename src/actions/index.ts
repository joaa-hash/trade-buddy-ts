import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
//types
import { Trade } from "../components/Interfaces";

export interface User {
  ticker: string;
  completed: boolean;
}

export interface GetTradesAction {
  type: ActionTypes.getUserTrades;
  payload: Trade[];
}
export interface CreateUserAction {
  type: ActionTypes.createUser;
  payload: User;
}

const url = "https://trade-buddy-api.herokuapp.com/api/authorize";

export const createUser = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post(`${url}/user`);

    dispatch<CreateUserAction>({
      type: ActionTypes.createUser,
      payload: response.data,
    });
  };
};

export const getUserTrades = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Trade[]>(`${url}/trades`);

    dispatch<GetTradesAction>({
      type: ActionTypes.getUserTrades,
      payload: response.data,
    });
  };
};
