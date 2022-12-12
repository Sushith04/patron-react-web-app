import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    approveUser, getNGOInterestedDonors, getProfileUser, getUser, getUserInterests,
    getUsers,
    login,
    logout,
    pendingDonors,
    pendingNGOs,
    profile,
    register,
    updateProfile,
} from "./users-service";

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const pendingNGOsThunk = createAsyncThunk(
    'pendingNGOs',
    async () => await pendingNGOs()
)

export const pendingDonorsThunk = createAsyncThunk(
    'pendingDonors',
    async () => await pendingDonors()
)

export const approveUserThunk = createAsyncThunk(
    'approveUser',
    async (uid) => await approveUser(uid)
)

export const updateProfileThunk = createAsyncThunk(
    'updateProfile',
    async (profile) => await updateProfile(profile)
)

export const getUserThunk = createAsyncThunk(
    'getUser',
    async (userName) => await getUser(userName)
)

export const getProfileUserThunk = createAsyncThunk(
    'getProfileUser',
    async (userName) => await getProfileUser(userName)
)

export const getUsersThunk = createAsyncThunk(
    'getAllUsers',
    async (searchQuery) => await getUsers(searchQuery)
)

export const getUserInterestsThunk = createAsyncThunk(
    'getUserInterestsThunk',
    async (uid) => await getUserInterests(uid)
)

export const getNGOInterestedDonorThunk = createAsyncThunk(
    'getNGOInterestedDonorThunk',
    async (uid) => await getNGOInterestedDonors(uid)
)