import React from "react";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import Navigation from "../navigation";
import ProfileComponent from "./profile";
import SearchComponent from "./search";
import EditProfileComponent from "./edit-profile";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import requestsReducer from "./requests/requests-reducer";

const store = configureStore({reducer: {requests: requestsReducer}});

function Paytron() {
    return (
        <Provider store={store}>
            <div>
                <div className="row">
                    <div className="col-2 col-lg-1 col-xl-2">
                        <Navigation/>
                    </div>
                    <div className="col-10 col-lg-7 col-xl-6"
                         style={{overflowY: "scroll", height: "95vh"}}>
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="home" element={<HomeComponent/>}/>
                            <Route path="profile" element={<ProfileComponent/>}/>
                            <Route path="search" element={<SearchComponent/>}/>
                            <Route path="edit-profile" element={<EditProfileComponent/>}/>
                        </Routes>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"
                         style={{overflowY: "scroll", height: "95vh"}}>
                        {/*<WhoToFollowList/>*/}
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Paytron;