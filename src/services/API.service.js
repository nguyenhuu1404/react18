import axios from '../utils/CustomAxios'

const createUserApi = (data) => {
    return axios.post('api/v1/register', data)
}

const getListUserApi = (data) => {
    return axios.get('api/v1/users')
}

export { createUserApi, getListUserApi }
