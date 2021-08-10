import { takeEvery, put, call } from "@redux-saga/core/effects"
import axios from 'axios'

async function fetchUserData() {
  const usersData = await axios.get("https://api.github.com/users/hacktivist123/repos")  
  return usersData.data
}

function* fetchData() {
    const userFetchedData = yield call(fetchUserData)
      yield put({type:"USER_DATA_RECEIVED", userFetchedData})
  }

export default function* mySaga() {
  yield takeEvery("GET_USER_DATA",fetchData)
}