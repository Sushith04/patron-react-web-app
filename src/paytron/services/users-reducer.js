import {createSlice} from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk
} from "./users-thunk";

const usersReducer = createSlice({
                                     name: 'users',
                                     initialState: {
                                         users: [],
                                         loginError : "",
                                         registerError: "",
                                         registerSuccess: false,
                                         logoutComp: false,
                                         currentUser: null,
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
                                             state.loginError = "Invalid username or password";
                                         }
                                     }
                                 })

export default usersReducer.reducer