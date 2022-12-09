import { createSlice } from "@reduxjs/toolkit";
import requests from './requests.json';
import {createRequestThunk, getRequestsThunk} from './requests-thunk'

const requestsSlice = createSlice({
                                   name: 'requests',
                                   initialState: {
                                       requests: [],
                                       loading: false
                                   },
                                   extraReducers: {
                                       [createRequestThunk.fulfilled]: (state, action) => {
                                           state.loading = false
                                           state.requests.push(action.payload)
                                       },
                                       [getRequestsThunk.pending]: (state, action) => {
                                           state.loading = true
                                           state.requests = []
                                       },
                                       [getRequestsThunk.fulfilled]: (state, action) => {
                                           state.loading = false
                                           state.requests = action.payload
                                       }
                                   }
                               });

export default requestsSlice.reducer;