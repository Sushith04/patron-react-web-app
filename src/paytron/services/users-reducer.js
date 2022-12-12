import {createSlice} from "@reduxjs/toolkit";
import {
    approveUserThunk, getProfileUserThunk,
    getUsersThunk, getUserThunk,
    loginThunk,
    logoutThunk,
    pendingDonorsThunk,
    pendingNGOsThunk,
    profileThunk,
    registerThunk,
    updateProfileThunk
} from "./users-thunk";

const usersReducer = createSlice({
                                     name: 'users',
                                     initialState: {
                                         users: [],
                                         pendingNGOs: [],
                                         pendingDonors: [],
                                         loginError: "",
                                         registerError: "",
                                         registerSuccess: false,
                                         logoutComp: false,
                                         currentUser: null,
                                         loading: true,
                                         searchResults: [],
                                         clickedUser: null,
                                         isThere: false,
                                         profileUser: null
                                     },
                                     extraReducers: {
                                         [logoutThunk.fulfilled]: (state, action) => {
                                             state.currentUser = null;
                                             state.logoutComp = true;
                                             state.loginError = "";
                                         },
                                         [profileThunk.pending]: (state, action) => {
                                             state.currentUser = null
                                             state.loading = true
                                         },
                                         [profileThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                             state.loading = false
                                         },
                                         [profileThunk.rejected]: (state, action) => {
                                             state.currentUser = null
                                             state.loading = false
                                         },
                                         [registerThunk.fulfilled]: (state, action) => {
                                             state.registerError = "";
                                             state.registerSuccess = true;
                                         },
                                         [registerThunk.rejected]: (state, action) => {
                                             state.registerError =
                                                 "Registration failed, either given username exists or you are yet to fill in all the details";
                                         },
                                         [loginThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                             state.registerSuccess = false;
                                             state.logoutComp = false;
                                         },
                                         [loginThunk.rejected]: (state, action) => {
                                             state.loginError =
                                                 "Ensure your credentials are valid, or wait for Admin Approval";
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
                                         [updateProfileThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload;
                                         },
                                         [getUsersThunk.fulfilled]: (state, action) => {
                                             state.searchResults = action.payload;
                                             state.searchResults = state.searchResults
                                                 .filter(s => s.username !== "admin")
                                             state.searchResults.length > 0 ? (state.isThere = true)
                                                                            : (state.isThere = false)
                                         },
                                         [getUserThunk.fulfilled]: (state, action) => {
                                             state.clickedUser = action.payload;
                                         },
                                         [getProfileUserThunk.fulfilled]: (state, action) => {
                                             state.profileUser = action.payload;
                                         }
                                     }
                                 })

export default usersReducer.reducer