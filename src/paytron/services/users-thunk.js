import {createAsyncThunk} from "@reduxjs/toolkit";
import { login, logout, profile, register} from "./users-service";

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

