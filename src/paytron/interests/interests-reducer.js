import {createSlice} from "@reduxjs/toolkit";
import interestsArray from "./interests.json";

const interestSlice = createSlice({
                                      name: "interests",
                                      initialState: interestsArray
                                  });

export default interestSlice.reducer;