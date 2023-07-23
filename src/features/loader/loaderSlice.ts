import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface loaderState {
  status: 0 | 1;
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    status: 0
  } as loaderState,
  reducers: {
    turnOn(state) {
      state.status = 1;
    },
    turnOff(state) {
      state.status = 0;
    },
  },
});

export const { turnOn, turnOff } = loaderSlice.actions

export function selectLoadingbarStatus(state: RootState): 1 | 0 {
  return state.loader.status;
}

export default loaderSlice.reducer
