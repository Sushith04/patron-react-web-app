import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateRequestInterestsThunk, updateRequestLikesThunk} from "./requests-thunk";

const RequestsStats = ({request}) => {
    const {currentUser} = useSelector((state) => state.users);

    var isLiked = !!(currentUser && request.likedDonors.includes(currentUser._id));
    var isInterested = !!(currentUser && request.interestedDonors.includes(currentUser._id));
    const dispatch = useDispatch();

    if (currentUser) {
        var isNgo = (currentUser.role === "NGO");
    }

    const likedRequest = () => {
        if (!currentUser) {
            window.alert("Please login to perform operation")
            return;
        }
        // Implemented liked & Unliked based on value in likedRequests of currentUser.
        dispatch(updateRequestLikesThunk({
                               ...request,
                               userid: currentUser._id
                           }))
    }

    const interestedRequest = () => {
        if (!currentUser) {
            window.alert("Please login to perform operation")
            return;
        }
        dispatch(updateRequestInterestsThunk({
                                                 ...request,
                                                 userid: currentUser._id
                                             }))
    }

    return (
        <div className="row text-muted mt-3">
            <div className="col align-content-center justify-content-center d-flex">
                {isNgo?
                 <span className="pe-2 fw-bold text-black">Likes:&nbsp;
                     <span style={{color: "red"}}>{request.likes}</span></span> :
                 <span className="pe-2 fw-bold text-black"
                      onClick={() => {
                          likedRequest()
                      }}
                >Like:&nbsp;
                    <span title="Like" style={{color: isLiked ? 'red' : 'gray'}}>
                        <i className={isLiked ? "fa fa-heart" : "fa fa-regular fa-heart"}></i>
                        &nbsp;{request.likes}</span></span>}
            </div>
            <div className="col align-content-center justify-content-center d-flex">
                {isNgo?
                 <span className="pe-2 fw-bold text-black">Interests:&nbsp;
                     <span style={{color: "#FABD02"}}>{request.interests}</span></span> :
                <span className="pe-2 fw-bold text-black"
                      onClick={() => {
                          interestedRequest()
                      }}
                >Interested:&nbsp;
                    <span title="Interested"
                          style={{color: isInterested ? '#FABD02' : 'gray'}}>
                       <i className={isInterested ? "fa-solid fa-lightbulb"
                                                        : "fa fa-regular fa-lightbulb"}></i>
                        &nbsp;{request.interests}</span></span>}
            </div>
        </div>
    );
}

export default RequestsStats;