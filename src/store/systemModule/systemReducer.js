const initialState = {
  isFetching: false,
};
const systemData = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_SYSTEM_DATA":
      return {
        isFetching: true,
      };
    case "REQUEST_SYSTEM_DETAILS":
      return {
        isFetching: true,
      };
    case "SYSTEM_DATA_RECEIVED":
      console.log("-------SYSTEM_DATA_RECEIVED", state);
      return {
        ...state,
        isFetching:false,
        system: action.systemFetchedData,
      };
    case "SYSTEM_DETAILS_RECEIVED":
      return {
        ...state,
        isFetching:false,
        systemDetails: action.systemFetchedDetails,
      };
    default:
      return {
        state,
      };
  }
};

export default systemData;
