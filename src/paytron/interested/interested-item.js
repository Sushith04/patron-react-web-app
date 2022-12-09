import React from "react";

const InterestedItem = ({interested}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="fw-bold mb-1 ms-1">Request: "{interested.requestName}"</div>
                    <ul className="list-group">
                        {
                            interested.userName.map((item, i) => {
                                return <li className="list-group-item" key={i}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default InterestedItem;