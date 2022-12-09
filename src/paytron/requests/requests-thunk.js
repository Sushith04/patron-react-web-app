import {createAsyncThunk} from "@reduxjs/toolkit";
import {createRequest, getRequests, updateRequest} from "./requests-service";

export const createRequestThunk = createAsyncThunk(
    'createRequest',
    async (request) => await createRequest(request)
)

export const getRequestsThunk = createAsyncThunk(
    'getRequests',
    async () => await getRequests()
)

export const updateRequestThunk = createAsyncThunk(
    'updateRequests',
    async (request) => await updateRequest(request)
)