import axios from 'axios';

const BASE_API_URL = 'http://localhost:4000'

const api = axios.create({withCredentials: true});

export const register = async (user) => {
    const response = await api.post(`${BASE_API_URL}/register`, user)
    const newUser = response.data
    return newUser
}

export const login = async (user) => {
    const response = await api.post(`${BASE_API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API_URL}/logout`)
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_API_URL}/profile`)
    return response.data
}

export const pendingDonors = async () => {
    const response = await api.get(`${BASE_API_URL}/pendingDonors`)
    return response.data
}

export const pendingNGOs = async () => {
    const response = await api.get(`${BASE_API_URL}/pendingNGOs`)
    return response.data
}

export const approveUser = async (uid) => {
    const response = await axios.post(`${BASE_API_URL}/updateUser/${uid}`);
    return response.data;
}

export const updateProfile = async (profile) => {
    const response = await axios.put(`${BASE_API_URL}/updateProfile/${profile._id}`, profile);
    return response.data;
}

export const getUsers = async (searchQuery) => {
    const response = await axios.get(`${BASE_API_URL}/getUsers/${searchQuery}`);
    return response.data;
}

export const getUserInterests = async (uid) => {
    const response = await axios.get(`${BASE_API_URL}/getUserInterests/${uid}`);
    return response.data;
}

export const getNGOInterestedDonors = async (uid) => {
    const response = await axios.get(`${BASE_API_URL}/getNGOInterestedDonors/${uid}`);
    return response.data;
}