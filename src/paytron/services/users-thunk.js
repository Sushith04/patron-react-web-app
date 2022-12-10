import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    approveUser,
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

export const getUsersThunk = createAsyncThunk(
    'getAllUsers',
    async (searchQuery) => await getUsers(searchQuery)
)