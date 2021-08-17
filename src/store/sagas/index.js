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

function fetchSystemsData() {
  try {
    const systemData = axios
      .get("http://localhost:3001/computer/getAllComputerData")
      .then((res) => res.data);
    return systemData;
  } catch (error) {
    console.log(error);
  }
}

function fetchSystemDetails(systemID) {
  try {
    const systemDetails = axios
      .get(`http://localhost:3001/computer/getComputer/${systemID}`)
      .then(res => res.data);
    return systemDetails
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

function* fetchSystemData() {
  const systemFetchedData = yield call(fetchSystemsData);
  yield put({ type: "SYSTEM_DATA_RECEIVED", systemFetchedData });
}

function* getSystemDetails(action) {
  const systemFetchedDetails = yield call(fetchSystemDetails, action.id);
  yield put({type: "SYSTEM_DETAILS_RECEIVED", systemFetchedDetails})
}

export default function* mySaga() {
  yield all([
    takeEvery("REQUEST_USER_DATA", fetchData),
    takeEvery("REQUEST_USER_DETAILS", getUserDetails),
    takeEvery("REQUEST_SYSTEM_DATA", fetchSystemData),
    takeEvery("REQUEST_SYSTEM_DETAILS", getSystemDetails),
  ]);
}
