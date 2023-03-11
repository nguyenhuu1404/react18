export const LIST_USER_PAGINATE_SUCCESS = "LIST_USER_PAGINATE_SUCCESS"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const listUserPaginate = (data, pagination) => {
    return {
        type: LIST_USER_PAGINATE_SUCCESS,
        data,
        pagination
    }
}
