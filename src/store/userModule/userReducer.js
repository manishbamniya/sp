const initialState = {
  user: [],
  isFetching: false,
};
const userData = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_USER_DATA":
      return {
        ...state,
        isFetching: true,
      };
    case "REQUEST_USER_DETAILS":
      return {
        ...state,
        isFetching: true,
      };

    case "USER_DATA_RECEIVED":
      console.log("state of userData ", state);
      return {
        ...state,
        isFetching: false,
        user: action.userFetchedData,
      };
    case "USER_DETAILS_RECEIVED":
      console.log("state of userDetail ", state);
      return {
        ...state,
        isFetching:false,
        userdetails: action.userFetchedDetails,
      };
    default:
      return state;
  }
};
export default userData;
