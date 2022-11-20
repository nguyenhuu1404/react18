import axios from '../utils/CustomAxios'

const createUserApi = (data) => {
    return axios.post('api/v1/register', data)
}

const editUserApi = (id, data) => {
    return axios.put(`api/v1/users/${id}`, data)
}

const deleteUserApi = (id) => {
    return axios.delete(`api/v1/users/${id}`)
}

const getListUserApi = (data) => {
    return axios.get('api/v1/users')
}

export { createUserApi, getListUserApi, editUserApi, deleteUserApi }
