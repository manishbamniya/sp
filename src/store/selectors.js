import { createSelector } from "reselect";

const GlobalState = (state) => state || {};

export const selectGlobalState = () => {
  console.log("global state -----------")
  createSelector(GlobalState, (substate) => substate);
};

export default GlobalState;
