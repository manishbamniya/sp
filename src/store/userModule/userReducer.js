const initialState = {}
const userData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return { ...state };
    case "USER_DATA_RECEIVED":
      return { ...state, user: action.userFetchedData };
    case "USER_DETAILS_RECEIVED":
      console.log("state of userDetail ",state)
      return { ...state, userdetails: action.userFetchedDetails}
    default:
      return state;
  }
};
export default userData;
