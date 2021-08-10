const userData = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return { ...state };
    case "USER_DATA_RECEIVED":
      return { ...state, user: action.userFetchedData };
    default:
      return state;
  }
};
export default userData;
