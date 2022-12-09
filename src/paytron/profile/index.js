import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    if (!currentUser) {
        return (<Navigate to={"/login"}/>)
    }

    return(
        <>
            <h1>Profile</h1>
            <a href="/edit-profile">Edit profile</a>
        </>
    );
};
export default ProfileComponent;