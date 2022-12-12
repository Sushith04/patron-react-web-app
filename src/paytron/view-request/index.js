import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import RequestsStats from "../requests/requests-stats";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getUserThunk} from "../services/users-thunk";

const ViewRequestComponent = ({route, navigate}) => {

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

    const location = useLocation();
    //console.log(location)

    const navigate2 = useNavigate();
    const {currentUser} = useSelector((state) => state.users);

    const {clickedUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserThunk(location.state.id.userName))
    }, []);

    function move() {
        if (currentUser && location.state.id.userName === currentUser.username) {
            navigate2(`/profile`);
        } else {
            navigate2(`/view-profile`, {state: {id: clickedUser}});
        }
    }

    return (
        <>
            <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className="col">
                        <div>
                            <div className="fw-bolder mb-3" onClick={move} type="button" style={{color: "#5a4099"}}>{location.state.id.name}
                                <span className="text-secondary fw-normal"> @{location.state.id.userName}
                                    &nbsp;&middot; {getTimeInterval(location.state.id.time)}</span>
                            </div>
                            <div className="mb-3">
                                <div>
                                    <p className="mb-3 fw-bold">{location.state.id.title}</p>
                                </div>
                                <div>
                                    <span className="fw-bold">Donation: </span>${location.state.id.donation}
                                </div>
                            </div>
                            <div className="mb-3">{location.state.id.request}</div>
                        </div>
                    </div>
                </div>
            </li>
            </ul>
        </>
    )
}

export default ViewRequestComponent;