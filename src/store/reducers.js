import { combineReducers } from "redux";
import userData from '../store/userModule/userReducer'

const reducer = combineReducers({
    user:userData
})

export default reducer