import {createAsyncThunk} from "@reduxjs/toolkit";
import {createRequest, getRequests} from "./requests-service";

export const createRequestThunk = createAsyncThunk(
    'createRequest',
    async (request) => await createRequest(request)
)

export const getRequestsThunk = createAsyncThunk(
    'getRequests',
    async () => await getRequests()
)