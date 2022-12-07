import React from "react";
// import {useDispatch} from "react-redux";
// import {updateTuitThunk} from "../requests/tuits-thunks";

const RequestsStats = ({request}) => {
    // const dispatch = useDispatch();
    return (
        <div className="row text-muted mt-3">
            <div className="col align-content-center justify-content-center d-flex"
                // onClick={() => dispatch(updateTuitThunk({
                //                                                             ...tuit,
                //                                                             likes: tuit.likes +
                // 1, liked: true }))}
            >
                <span className="pe-2 fw-bold text-black">Like:&nbsp;
                    <span title="Like" style={{color: request.liked ? 'red' : 'gray'}}>
                        <i className={request.liked ? "fa fa-heart" : "fa fa-regular fa-heart"}></i>
                        &nbsp;{request.likes}</span></span>
            </div>
            <div className="col align-content-center justify-content-center d-flex"
                // onClick={() => dispatch(updateTuitThunk({
                //                                                             ...tuit,
                //                                                             likes: tuit.likes +
                // 1, liked: true }))}
            >
                <span className="pe-2 fw-bold text-black">Interested:&nbsp;
                    <span title="Interested" style={{color: request.interested ? '#FABD02' : 'gray'}}>
                       <i className={request.interested ? "fa-solid fa-lightbulb"
                                                        : "fa fa-regular fa-lightbulb"}></i>
                        &nbsp;{request.interests}</span></span>
            </div>
        </div>
    );
}

export default RequestsStats;