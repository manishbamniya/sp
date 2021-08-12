import { takeEvery, put, call, all } from "@redux-saga/core/effects";
import axios from "axios";

async function fetchUserData() {
  try{
    const usersData = await axios.get(
      "http://localhost:3001/employee/getAllEmployees"  //name: employee Listing api
    );
    return usersData.data;
  } catch(error){
    console.log(error)
  }
}

async function fetchUserDetails(id) {
  try{
    const userDetails = await axios.get(
      `http://localhost:3001/employee/getEmployee/${id}` // name: employee details api
    )
    return userDetails.data
  } catch(error){
      console.log(error)
  }
}

function* fetchData() {
  const userFetchedData = yield call(fetchUserData);
  yield put({ type: "USER_DATA_RECEIVED", userFetchedData });
}

function* getUserDetails(action){
  console.log("getting GET_USER_DETAILS action", action)
  const userFetchedDetails = yield call(fetchUserDetails,action.id);
  console.log("response from api", userFetchedDetails)
  yield put({type:"USER_DETAILS_RECEIVED",userFetchedDetails})
}


export default function* mySaga() {
  yield all([
    takeEvery("GET_USER_DATA", fetchData),
    takeEvery("GET_USER_DETAILS", getUserDetails)
  ])
}