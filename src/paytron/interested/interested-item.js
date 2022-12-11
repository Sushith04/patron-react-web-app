import React from "react";

const InterestedItem = ({interestedDonor}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="fw-bold">{
                        interestedDonor.name
                    }</div>
                </div>
            </div>
        </li>
    );
};

export default InterestedItem;