import { createSelector } from "reselect";
import GlobalState from "../selectors";

export const globalUserState = (state) => state;

export const userState = () => {
  createSelector(GlobalState, (substate) => substate.user);
};

export const userData = () => {
  createSelector(globalUserState, (substate) => substate.user);
};
