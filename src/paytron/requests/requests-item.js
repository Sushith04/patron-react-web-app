import React, {useEffect} from "react";
import RequestsStats from "./requests-stats";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserThunk} from "../services/users-thunk";
import {deleteRequestThunk} from "./requests-thunk";

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

    let {clickedUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserThunk(request.userName))
    }, []);

    function move() {
        if (currentUser && request.userName === currentUser.username) {
            navigate(`/profile`);
        } else {
            navigate(`/view-profile`, {state: {id: clickedUser}});
        }
    }

    function viewReq() {
        navigate(`/view-request`, {state: {id: request}});
    }


    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div>
                        <div className="fw-bolder mb-3" style={{color: "#5a4099"}} onClick={move} type="button">{request.name}
                            <span className="text-secondary fw-normal"> @{request.userName}
                                &nbsp;&middot; {getTimeInterval(request.time)}</span>
                        </div>
                        <div className="mb-3" type="button" onClick={viewReq}>
                            <div>
                                <p className="mb-3 fw-bold">{request.title}</p>
                            </div>
                            <div>
                                <span className="fw-bold">Donation: </span>${request.donation}
                            </div>
                        </div>
                        <RequestsStats request={request}/>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default RequestsItem;