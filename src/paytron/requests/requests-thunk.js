import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createRequest,
    getRequests,
    updateRequestInterests,
    updateRequestLikes
} from "./requests-service";

export const createRequestThunk = createAsyncThunk(
    'createRequest',
    async (request) => await createRequest(request)
)

export const getRequestsThunk = createAsyncThunk(
    'getRequests',
    async () => await getRequests()
)

export const updateRequestLikesThunk = createAsyncThunk(
    'updateRequestLikes',
    async (request) => await updateRequestLikes(request)
)

export const updateRequestInterestsThunk = createAsyncThunk(
    'updateRequestLikes',
    async (request) => await updateRequestInterests(request)
)