import {createSlice} from "@reduxjs/toolkit";
import {getUserInterestsThunk} from "../services/users-thunk";

const interestSlice = createSlice({
                                      name: "interests",
                                      initialState: {
                                          interestsArray: [],
                                      },
                                      extraReducers: {
                                          [getUserInterestsThunk.fulfilled]: (state, action) => {
                                              state.interestsArray = action.payload
                                          }

                                      }
                                  });

export default interestSlice.reducer;