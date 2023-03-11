import { combineReducers } from "redux"
import auth from "./AuthReducer"
import users from "./UserReducer"

const rootReducer = combineReducers({
    auth,
    listUser: users
})

export default rootReducer
