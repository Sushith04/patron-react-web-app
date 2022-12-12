import axios from 'axios';

const BASE_API_URL = 'http://localhost:4000'

const api = axios.create({withCredentials: true});

export const createRequest = async (request) => {
    const uid = request.userid;
    const response = await api.post(`${BASE_API_URL}/request/${uid}`, request)
    const newRequest = response.data
    return newRequest
}

export const getRequests = async () => {
    const response = await api.get(`${BASE_API_URL}/requests`)
    return response.data
}

export const updateRequestLikes = async (request) => {
    const response = await axios.put(`${BASE_API_URL}/updateRequestLikes/${request._id}/${request.userid}`);
    return response.data;
}

export const updateRequestInterests = async (request) => {
    const response = await axios.put(`${BASE_API_URL}/updateRequestInterests/${request._id}/${request.userid}`);
    return response.data;
}

export const deleteRequest = async (rid) => {
    const response = await axios.delete(`${BASE_API_URL}/deleteRequest/${rid}`);
    return response.data;
}