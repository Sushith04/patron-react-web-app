import {createSlice} from "@reduxjs/toolkit";
import {createRequestThunk, getRequestsThunk, updateRequestThunk} from './requests-thunk'

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
                                          },
                                          [updateRequestThunk.fulfilled]: (state, action) => {
                                              state.loading = false
                                              const requestNdx = state.requests
                                                  .findIndex((r) => r._id === action.payload._id)
                                              state.requests[requestNdx] = {
                                                  ...state.requests[requestNdx],
                                                  ...action.payload
                                              }
                                          }
                                      }
                                  });

export default requestsSlice.reducer;