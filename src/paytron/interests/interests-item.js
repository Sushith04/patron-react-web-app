import React from "react";

const InterestsItem = ({interest}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="fw-bold">{interest.requestTitle}</div>
                </div>
            </div>
        </li>
    );
};

export default InterestsItem;