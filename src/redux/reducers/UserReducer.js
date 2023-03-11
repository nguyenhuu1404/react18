import * as usersAction from "../actions/UsersAction"

const initialState = {
    users: [],
    pagination: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case usersAction.LIST_USER_PAGINATE_SUCCESS:
            const { data, pagination } = action
            return {
                ...state,
                users: data,
                pagination
            }
        default:
            return state
    }
}

export default userReducer
