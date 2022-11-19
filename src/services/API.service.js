import axios from '../utils/CustomAxios'

const createUserApi = (data) => {
    return axios.post('api/v1/register', data)
}

export { createUserApi }
