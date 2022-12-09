import React from "react";
import {useSelector} from "react-redux";
import {updateRequestThunk} from "./requests-thunk";
// import {updateProfileThunk} from "../services/users-thunk";
// import currentUser from "../current-user";

const RequestsStats = ({request}) => {
    // if (request.liked) {
    //     var isLiked = true;
    // }
    // if (request.interested) {
    //     var isInterested = true;
    // }
    const {currentUser} = useSelector((state) => state.users)

    const likedRequest = () => {
        if (!currentUser) {
            window.alert("Please login to perform operation")
        }
        // Implemented liked & Unliked based on value in likedRequests of currentUser.
        updateRequestThunk({
                               ...request,
                               likes: request.likes + 1,
                               liked: false
                           })
    }

    const interestedRequest = () => {
        if (!currentUser) {
            window.alert("Please login to perform operation")
        }
        updateRequestThunk({
                               ...request,
                               interests: request.interests - 1,
                               interested: false
                           })
    }

    // const dispatch = useDispatch();
    return (
        <div className="row text-muted mt-3">
            <div className="col align-content-center justify-content-center d-flex">
                <span className="pe-2 fw-bold text-black"
                      onClick={() => {
                          likedRequest()
                      }}
                >Like:&nbsp;
                    <span title="Like" style={{color: request.liked ? 'red' : 'gray'}}>
                        <i className={request.liked ? "fa fa-heart" : "fa fa-regular fa-heart"}></i>
                        &nbsp;{request.likes}</span></span>
            </div>
            <div className="col align-content-center justify-content-center d-flex">
                <span className="pe-2 fw-bold text-black"
                      onClick={() => {
                          interestedRequest()
                      }}
                >Interested:&nbsp;
                    <span title="Interested"
                          style={{color: request.interested ? '#FABD02' : 'gray'}}>
                       <i className={request.interested ? "fa-solid fa-lightbulb"
                                                        : "fa fa-regular fa-lightbulb"}></i>
                        &nbsp;{request.interests}</span></span>
            </div>
        </div>
    );
}

export default RequestsStats;