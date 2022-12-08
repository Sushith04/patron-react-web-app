import React from "react";

const InterestedItem = ({interested}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="fw-bold mb-1 ms-1">Request: "{interested.requestName}"</div>
                    <div>
                        {interested.userName.map(item => {
                            return <li className="list-group-item">{item}</li>;
                        })}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default InterestedItem;