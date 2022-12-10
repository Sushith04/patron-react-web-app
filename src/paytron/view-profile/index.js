import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const ViewProfileComponent = ({route, navigate}) => {

    const location = useLocation();

    if (location.state.id) {
        var isNgo = (location.state.id.role === "NGO");
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
                                        src={location.state.id.profilePicture}
                                        className="rounded-circle img-fluid"
                                        style={{width: "164px", height: "164px"}} alt="profilePic"/>
                                </div>
                                <h4 className="mb-2 mt-3">{location.state.id.name}</h4>
                                <p className="text-muted mb-4">@{location.state.id.username}
                                    <span
                                        className="mx-2">|</span>{isNgo
                                                                  ? location.state.id.role
                                                                  : location.state.id.donorProf}
                                </p>
                                <div
                                    className="row mt-5 mb-2 justify-content-center text-secondary">
                                    <div className="col-auto">
                                        <i className="fa-solid fa-envelope"></i> &nbsp;{location.state.id.email}
                                    </div>
                                    <div className="col-auto">
                                        <i className="fa-solid fa-location-dot"></i> &nbsp;{location.state.id.address}
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-center text-center mt-5 mb-2">
                                    <div className="px-3">
                                        <p className="text-muted mb-0">{isNgo ? "NGO Head"
                                                                              : "Maximum Donation"}</p>
                                        <p className="mb-2 h5">{isNgo
                                                                ? location.state.id.ngoHead
                                                                : "$ "
                                                                  + location.state.id.donorMaxDon}</p>
                                    </div>
                                </div>
                                <div className="mb-2 mt-4">
                                    <span className="fw-bold">{isNgo ? "What we do: " : ""}</span>
                                    <span>{isNgo ? location.state.id.ngoDesc : ""}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="fw-bold">{isNgo ? "Primary cause: "
                                                                     : ""}</span>
                                    <span>{isNgo ? location.state.id.ngoCause : ""}</span>
                                </div>
                            </div>
                            <span className="text-center mb-3">
                                <span className="fa fa-arrow-left"></span>
                                <span><Link to="/search"
                                            className="fw-bold text-decoration-none text-center"
                                            style={{color: "#5a4099"}}> Go back</Link></span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ViewProfileComponent;