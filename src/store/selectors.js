import { createSelector } from "reselect";

const GlobalState = (state) => state || {};

export const selectGlobalState = () => {
  createSelector(GlobalState, (substate) => substate);
};

export default GlobalState;
