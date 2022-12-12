import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProfileUserThunk} from "../services/users-thunk";

const InterestedItem = ({interestedDonor}) => {

    const navigate = useNavigate();
    // let {profileUser} = useSelector((state) => state.users);
    //
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getProfileUserThunk(interestedDonor.username))
    // }, []);

    function move() {
            navigate(`/view-profile`, {state: {id: interestedDonor}});
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="fw-bold" onClick={move} type="button">{
                        interestedDonor.name
                    }</div>
                </div>
            </div>
        </li>
    );
};

export default InterestedItem;