import { createSelector } from "reselect";
import GlobalState from "../selectors";

export const globalUserState = (state) => state.user || {};

export const userState = () => {
  createSelector(GlobalState, (substate) => substate.user);
};

export const getUsersData = () => {
  createSelector(globalUserState, (substate) => substate.user);
};
