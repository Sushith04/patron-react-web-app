import {createSlice} from "@reduxjs/toolkit";
import {getNGOInterestedDonorThunk} from "../services/users-thunk";

const interestedSlice = createSlice({
                                        name: "interested",
                                        initialState: {
                                            interestedArray: [],
                                            interestedDonorArray: [],
                                        },
                                        extraReducers: {
                                            [getNGOInterestedDonorThunk.fulfilled]: (state, action) => {
                                                state.interestedArray = action.payload
                                            }
                                        }
                                    });

export default interestedSlice.reducer;