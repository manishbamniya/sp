import { createSelector } from "reselect";
import GlobalState from "../selectors";

export const globalUserState = (state) => state.user || {};

export const userState = () => {
  createSelector(GlobalState, (substate) => substate.users);
};

export const usersData = () => {
  createSelector(globalUserState, (substate) => substate.user);
};
