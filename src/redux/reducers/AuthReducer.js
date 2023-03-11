import * as authAction from "../actions/AuthAction"

const initialState = {
    loginInProgress: false,
    isAuthenticated: false,
    access_token: '',
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authAction.REQUEST_LOGIN:
            return {
                ...state,
                loginInProgress: true
            }
        case authAction.LOGIN_SUCCESS: {
            const data = action.data
            return {
                ...state,
                loginInProgress: false,
                isAuthenticated: true,
                access_token: data?.token            }
        }
        case authAction.LOGIN_FAILURE:
            return {
                ...state,
                loginInProgress: false
            }
        default:
            return state
    }
}

export default authReducer
