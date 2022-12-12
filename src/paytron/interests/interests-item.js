import React from "react";
import {useNavigate} from "react-router-dom";

const InterestsItem = ({interest}) => {

    const navigate = useNavigate();
    function viewReq() {
        navigate(`/view-request`, {state: {id: interest}});
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="fw-bold" onClick={viewReq} type="button">{
                        interest.title
                    }</div>
                </div>
            </div>
        </li>
    );
};

export default InterestsItem;