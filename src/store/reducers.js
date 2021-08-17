import { combineReducers } from "redux";
import userData from '../store/userModule/userReducer'
import systemData from '../store/systemModule/systemReducer'

const reducer = combineReducers({
    user:userData,
    system:systemData,
})

export default reducer