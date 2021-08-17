import { takeEvery, put, call, all } from "@redux-saga/core/effects";
import axios from "axios";

function fetchUserData() {
  try {
    const usersData = axios
      .get(
        "http://localhost:3001/employee/getAllEmployees" //name: employee Listing api
      )
      .then((res) => res.data);
    return usersData;
  } catch (error) {
    console.log(error);
  }
}

function fetchUserDetails(id) {
  try {
    const userDetails = axios
      .get(
        `http://localhost:3001/employee/getEmployee/${id}` // name: employee details api
      )
      .then((res) => res.data);
    return userDetails;
  } catch (error) {
    console.log(error);
  }
}

function* fetchData() {
  const userFetchedData = yield call(fetchUserData);
  yield put({ type: "USER_DATA_RECEIVED", userFetchedData });
}

function* getUserDetails(action) {
  console.log("getting REQUEST_USER_DETAILS action", action);
  const userFetchedDetails = yield call(fetchUserDetails, action.id);
  console.log("response from api", userFetchedDetails);
  yield put({ type: "USER_DETAILS_RECEIVED", userFetchedDetails });
}

export default function* mySaga() {
  yield all([
    takeEvery("REQUEST_USER_DATA", fetchData),
    takeEvery("REQUEST_USER_DETAILS", getUserDetails),
  ]);
}
