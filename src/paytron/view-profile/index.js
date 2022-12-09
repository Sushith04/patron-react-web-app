import React from "react";

const ViewProfileComponent = (profileUser) => {

    if (profileUser) {
        var isNgo = (profileUser.profileUser.role === "NGO");
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
                                        src={profileUser.profileUser.profilePicture}
                                        className="rounded-circle img-fluid"
                                        style={{width: "164px", height: "164px"}} alt="profilePic"/>
                                </div>
                                <h4 className="mb-2 mt-3">{profileUser.profileUser.name}</h4>
                                <p className="text-muted mb-4">@{profileUser.profileUser.username}
                                    <span
                                        className="mx-2">|</span>{isNgo
                                                                  ? profileUser.profileUser.role
                                                                  : profileUser.profileUser.donorProf}
                                </p>
                                <div
                                    className="row mt-5 mb-2 justify-content-center text-secondary">
                                    <div className="col-auto">
                                        <i className="fa-solid fa-envelope"></i> &nbsp;{profileUser.profileUser.email}
                                    </div>
                                    <div className="col-auto">
                                        <i className="fa-solid fa-location-dot"></i> &nbsp;{profileUser.profileUser.address}
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-center text-center mt-5 mb-2">
                                    <div className="px-3">
                                        <p className="text-muted mb-0">{isNgo ? "NGO Head"
                                                                              : "Maximum Donation"}</p>
                                        <p className="mb-2 h5">{isNgo
                                                                ? profileUser.profileUser.ngoHead
                                                                : "$ "
                                                                  + profileUser.profileUser.donorMaxDon}</p>
                                    </div>
                                </div>
                                <div className="mb-2 mt-4">
                                    <span className="fw-bold">{isNgo ? "What we do: " : ""}</span>
                                    <span>{isNgo ? profileUser.profileUser.ngoDesc : ""}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="fw-bold">{isNgo ? "Primary cause: "
                                                                     : ""}</span>
                                    <span>{isNgo ? profileUser.profileUser.ngoCause : ""}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ViewProfileComponent;