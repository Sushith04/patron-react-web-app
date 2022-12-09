import currentProfile from "./currentProfile.json";
import {createSlice} from "@reduxjs/toolkit"

const profileSlice = createSlice({
                                     name: "currentProfile",
                                     initialState: currentProfile
                                 });

export default profileSlice.reducer;