import React from "react";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import Navigation from "../navigation";
import ProfileComponent from "./profile";
import SearchComponent from "./search";
import EditProfileComponent from "./edit-profile";
import InterestsList from "./interests/interests-list";
import InterestedList from "./interested/interested-list";
import {useSelector} from "react-redux";
import AdminComponent from "./admin";
import ProtectedRoute from "./protected-routes";
import ViewProfileComponent from "./view-profile";

function Paytron() {
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser) {
        var isNgo = (currentUser.role === "NGO");
    } else {
        var isGuest = true;
    }
    if (currentUser && currentUser.role === "ADMIN") {
        return (
            <div className="container">
                <AdminComponent/>
            </div>
        )
    } else {
        return (
            <div>
                {isGuest?
                 <div className="row">
                     <div className="col-2 col-lg-1 col-xl-2">
                         <Navigation/>
                     </div>
                     <div className="col-10 col-lg-11 col-xl-10"
                          style={{overflowY: "scroll", height: "100vh"}}>
                         <Routes>
                             <Route index element={<HomeComponent/>}/>
                             <Route path="home" element={<HomeComponent/>}/>

                             <Route path="profile" element={
                                 <ProtectedRoute>
                                     <ProfileComponent/>
                                 </ProtectedRoute>
                             }/>
                             <Route path="search" element={<SearchComponent/>}/>
                             <Route path="edit-profile" element={
                                 <ProtectedRoute>
                                     <EditProfileComponent/>
                                 </ProtectedRoute>
                             }/>
                             <Route path="view-profile" element={
                                     <ViewProfileComponent profileUser={currentUser}/>
                             }/>
                         </Routes>
                     </div>
                 </div>  :
                 <div className="row">
                    <div className="col-2 col-lg-1 col-xl-2">
                        <Navigation/>
                    </div>
                    <div className="col-10 col-lg-8 col-xl-7"
                         style={{overflowY: "scroll", height: "100vh"}}>
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="home" element={<HomeComponent/>}/>

                            <Route path="profile" element={
                                <ProtectedRoute>
                                    <ProfileComponent/>
                                </ProtectedRoute>
                            }/>
                            <Route path="search" element={<SearchComponent/>}/>
                            <Route path="edit-profile" element={
                                <ProtectedRoute>
                                    <EditProfileComponent/>
                                </ProtectedRoute>
                            }/>
                            <Route path="view-profile" element={
                                    <ViewProfileComponent profileUser={currentUser}/>
                            }/>
                        </Routes>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3"
                                      style={{overflowY: "scroll", height: "95vh"}}>
                        {isNgo ? <InterestedList/> : <InterestsList currentUser={currentUser}/>}
                    </div>
                </div>}
            </div>
        );
    }
}

export default Paytron;