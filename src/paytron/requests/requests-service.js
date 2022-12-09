import axios from 'axios';
const BASE_API_URL = 'http://localhost:4000'

const api = axios.create({withCredentials: true});

export const createRequest = async (request) => {
    const response = await api.post(`${BASE_API_URL}/request`, request)
    const newRequest = response.data
    return newRequest
}

export const getRequests = async () => {
    const response = await api.get(`${BASE_API_URL}/requests`)
    return response.data
}
