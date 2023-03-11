export const REQUEST_LOGIN = "REQUEST_LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const doLogin = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data
    }
}
