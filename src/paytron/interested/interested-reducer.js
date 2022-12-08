import {createSlice} from "@reduxjs/toolkit";
import interestedArray from "./interested.json";

const interestedSlice = createSlice({
                                        name: "interested",
                                        initialState: interestedArray
                                    });

export default interestedSlice.reducer;