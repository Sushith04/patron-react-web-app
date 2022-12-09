import {createSlice} from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk,
    pendingNGOsThunk,
    pendingDonorsThunk,
    approveUserThunk
} from "./users-thunk";

const usersReducer = createSlice({
                                     name: 'users',
                                     initialState: {
                                         users: [],
                                         pendingNGOs: [],
                                         pendingDonors: [],
                                         loginError : "",
                                         registerError: "",
                                         registerSuccess: false,
                                         logoutComp: false,
                                         currentUser: null
                                     },
                                     extraReducers: {
                                         [logoutThunk.fulfilled]: (state, action) => {
                                             state.currentUser = null;
                                             state.logoutComp = true;
                                             state.loginError = "";
                                         },
                                         [profileThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                         },
                                         [registerThunk.fulfilled]: (state, action) => {
                                             state.registerError = "";
                                             state.registerSuccess = true;
                                         },
                                         [registerThunk.rejected]: (state, action) => {
                                             state.registerError = "Registration failed, either given username exists or you are yet to fill in all the details";
                                         },
                                         [loginThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                             state.registerSuccess = false;
                                             state.logoutComp = false;
                                         },
                                         [loginThunk.rejected]: (state, action) => {
                                             state.loginError = "Ensure your credentials are valid, or wait for Admin Approval";
                                         },
                                         [pendingNGOsThunk.fulfilled]: (state, action) => {
                                             state.pendingNGOs = action.payload;
                                         },
                                         [pendingDonorsThunk.fulfilled]: (state, action) => {
                                             state.pendingDonors = action.payload;
                                         },
                                         [approveUserThunk.fulfilled]: (state, action) => {
                                             state.pendingDonors = state.pendingDonors
                                                 .filter(t => t._id !== action.payload._id)
                                             state.pendingNGOs = state.pendingNGOs
                                                 .filter(t => t._id !== action.payload._id)
                                         },
                                     }
                                 })

export default usersReducer.reducer