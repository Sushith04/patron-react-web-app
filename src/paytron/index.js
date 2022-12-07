import React from "react";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import Navigation from "../navigation";
import ProfileComponent from "./profile";
import SearchComponent from "./search";
import EditProfileComponent from "./edit-profile";
// import {configureStore} from '@reduxjs/toolkit';
// import {Provider} from "react-redux";

// const store = configureStore(
//     {reducer: {who: whoReducer, tuitsData: tuitsReducer, currentProfile: profileReducer}});

function Paytron() {
    return (
        // <Provider store={store}>
            <div>
                <div className="row mt-2 mb-2">
                    <div className="col-2 col-lg-1 col-xl-2">
                        <Navigation/>
                    </div>
                    <div className="col-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="home" element={<HomeComponent/>}/>
                            <Route path="profile" element={<ProfileComponent/>}/>
                            <Route path="search" element={<SearchComponent/>}/>
                            <Route path="edit-profile" element={<EditProfileComponent/>}/>
                        </Routes>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        {/*<WhoToFollowList/>*/}
                    </div>
                </div>
            </div>
        // </Provider>
    );
}

export default Paytron;