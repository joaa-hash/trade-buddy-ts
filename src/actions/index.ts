import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { customHistory } from "../history/history";
//types
import { AnalysisProps, Trade, WindowSize } from "../components/Interfaces";

export interface User {
  ticker: string;
  completed: boolean;
}
export interface CreateTradeAction {
  type: ActionTypes.createTrade;
  payload: Trade[];
}
export interface DeleteTradeAction {
  type: ActionTypes.deleteTrade;
  payload: Trade[];
}
export interface GetTradesAction {
  type: ActionTypes.getUserTrades;
  payload: Trade[];
}
export interface CreateUserAction {
  type: ActionTypes.createUser;
  payload: User;
}

export interface GetAnalysis {
  type: ActionTypes.getAnalysis;
  payload: AnalysisProps;
}

export interface GetWindowSize {
  type: ActionTypes.getWindowSize;
  payload: WindowSize;
}

export interface UpdateTrade {
  type: ActionTypes.updateTrade;
  payload: Trade[];
}

export interface IsUpdateAction {
  type: ActionTypes.setUpdating;
  payload: Boolean;
}

const url = "https://trade-buddy-api.herokuapp.com/api/authorize";

export const createTrade = (formData: {}) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<Trade[]>(`${url}/trades`, formData);

    dispatch<CreateTradeAction>({
      type: ActionTypes.createTrade,
      payload: response.data,
    });

    customHistory.push("/dashboard");
  };
};

export const deleteTrade = (id: Number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.delete<Trade[]>(`${url}/trades/${id}`);

    dispatch<DeleteTradeAction>({
      type: ActionTypes.deleteTrade,
      payload: response.data,
    });

    customHistory.goBack();
  };
};

export const updateTrade = (formData: {}) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.put<Trade[]>(`${url}/trades`, formData);

    dispatch<UpdateTrade>({
      type: ActionTypes.updateTrade,
      payload: response.data,
    });

    customHistory.goBack();
  };
};

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

export const getAnalysis = (formData: {}) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<AnalysisProps>(
      `${url}/analysis`,
      formData
    );

    dispatch<GetAnalysis>({
      type: ActionTypes.getAnalysis,
      payload: response.data,
    });
  };
};

export const getWindowSize = (screenWidth: Number, screenHeight: Number) => {
  return {
    type: ActionTypes.getWindowSize,
    payload: { screenWidth, screenHeight },
  };
};

export const setUpdating = (bool: Boolean) => {
  return {
    type: ActionTypes.setUpdating,
    payload: bool,
  };
};
