import React, {useEffect} from "react";
import RequestsStats from "./requests-stats";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUsersThunk} from "../services/users-thunk";
import {getRequestsThunk} from "./requests-thunk";

const RequestsItem = ({request}) => {

    function getTimeInterval(date) {
        let seconds = Math.floor(Date.now() / 1000) - date;
        let unit = "second";
        let direction = "ago";
        if (seconds < 0) {
            seconds = -seconds;
            direction = "from now";
        }
        let value = seconds;
        if (seconds >= 31536000) {
            value = Math.floor(seconds / 31536000);
            unit = "year";
        } else if (seconds >= 2592000) {
            value = Math.floor(seconds / 2592000);
            unit = "month";
        } else if (seconds >= 86400) {
            value = Math.floor(seconds / 86400);
            unit = "day";
        } else if (seconds >= 3600) {
            value = Math.floor(seconds / 3600);
            unit = "hour";
        } else if (seconds >= 60) {
            value = Math.floor(seconds / 60);
            unit = "minute";
        }
        if (value !== 1) {
            unit = unit + "s";
        }
        return value + " " + unit + " " + direction;
    }

    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.users);

    if (currentUser) {
        var isNgo = (currentUser.role === "NGO");
    }

    const {searchResults} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    //use different api instead of getusersthunk() cos this api is returning
    // array and viewprofile needs a single object
    useEffect(() => {
        dispatch(getUsersThunk(request.userName))
    }, []);

    function move() {
        if (currentUser && request.userName === currentUser.username) {
            navigate(`/profile`);
        } else {
            console.log(searchResults)
            navigate(`/view-profile`, {state: {id: searchResults}});
        }
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div onClick={move}  type="button">
                        <div className="fw-bolder mb-3" style={{color: "#5a4099"}}>{request.name}
                            <span className="text-secondary fw-normal"> @{request.userName}
                                &nbsp;&middot; {getTimeInterval(request.time)}</span>
                        </div>
                        <div className="text-center mb-3">
                            <div className="float-start">
                                <span className="mb-2 fw-bold">{request.title}</span>
                            </div>
                            {/*<div className="float-end">*/}
                            {/*    {isNgo? "" : <button className="input-group-text text-white"*/}
                            {/*                         style={{*/}
                            {/*                             backgroundColor: "#5a4099"*/}
                            {/*                         }}>Donate*/}
                            {/*    </button>}*/}
                            {/*</div>*/}
                            <div className="d-inline-block">
                            <span className="float-end">
                            <span className="fw-bold">Donation: </span>{request.donation}</span>
                            </div>
                        </div>
                        <div className="mb-3">{request.request}</div>
                    </div>
                    {isNgo ? "" : <RequestsStats request={request}/>}
                </div>
            </div>
        </li>
    );
}
export default RequestsItem;