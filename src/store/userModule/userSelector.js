import { createSelector } from "reselect";
import GlobalState from "../selectors";

export const globalUserState = (state) => state.user || {};

export const usersState = () => {
  createSelector(GlobalState, (substate) => substate.user);
};

export const getUsersData = () => {
  console.log("get users data selector-----------")
  createSelector(globalUserState, (substate) => substate.user.user);
};
