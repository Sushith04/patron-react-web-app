import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users);

    if (!currentUser) {
        return (<Navigate to={"/login"}/>)
    }

    if (currentUser) {
        var isNgo = (currentUser.role === "NGO");
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-12">
                        <div className="card"
                             style={{borderRadius: "15px", backgroundColor: "#ebf2fa"}}>
                            <div className="card-body text-center">
                                <div className="mt-3 mb-4">
                                    <img
                                        src={currentUser.profilePicture}
                                        className="rounded-circle img-fluid"
                                        style={{width: "164px", height: "164px"}} alt="profilePic"/>
                                </div>
                                <h4 className="mb-2 mt-3">{currentUser.name}</h4>
                                <p className="text-muted mb-4">@{currentUser.username}
                                    <span
                                        className="mx-2">|</span>{isNgo ? currentUser.role
                                                                        : currentUser.donorProf}</p>
                                {/*<div className="mb-4 pb-2">*/}
                                {/*    <button type="button"*/}
                                {/*            className="btn btn-outline-primary btn-floating">*/}
                                {/*        <i className="fab fa-facebook-f fa-lg"></i>*/}
                                {/*    </button>*/}
                                {/*    <button type="button"*/}
                                {/*            className="btn btn-outline-primary btn-floating">*/}
                                {/*        <i className="fab fa-twitter fa-lg"></i>*/}
                                {/*    </button>*/}
                                {/*    <button type="button"*/}
                                {/*            className="btn btn-outline-primary btn-floating">*/}
                                {/*        <i className="fab fa-skype fa-lg"></i>*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                <a href="/edit-profile" type="button"
                                   className="btn btn-rounded text-white"
                                   style={{backgroundColor: "#5a4099"}}>
                                    Edit Profile
                                </a>
                                <div
                                    className="row mt-5 mb-2 justify-content-center text-secondary">
                                    <div className="col-auto">
                                        <i className="fa-solid fa-envelope"></i> &nbsp;{currentUser.email}
                                    </div>
                                    <div className="col-auto">
                                        <i className="fa-solid fa-phone"></i> &nbsp;{currentUser.phone}
                                    </div>
                                    <div className="col-auto">
                                        <i className="fa-solid fa-location-dot"></i> &nbsp;{currentUser.address}
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-center text-center mt-5 mb-2">
                                    <div className="px-3">
                                        <p className="text-muted mb-0">{isNgo ? "NGO Head"
                                                                              : "Maximum Donation"}</p>
                                        <p className="mb-2 h5">{isNgo ? currentUser.ngoHead : "$ "
                                                                                              + currentUser.donorMaxDon}</p>
                                    </div>
                                </div>
                                <div className="mb-2 mt-4">
                                    <span className="fw-bold">{isNgo ? "What we do: " : ""}</span>
                                    <span>{isNgo ? currentUser.ngoDesc : ""}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="fw-bold">{isNgo ? "Primary cause: "
                                                                     : ""}</span>
                                    <span>{isNgo ? currentUser.ngoCause : ""}</span>
                                </div>
                                <div className="mb-2 mt-4">
                                    <span className="fw-bold">{isNgo ? "" : "Salary: "}</span>
                                    <span>{isNgo ? "" : currentUser.donorSalary}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;