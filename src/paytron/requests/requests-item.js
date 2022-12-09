import React from "react";
import RequestsStats from "./requests-stats";


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
        if (value !== 1)
            unit = unit + "s";
        return value + " " + unit + " " + direction;
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="fw-bolder mb-2">{request.name}
                        <span className="text-secondary fw-normal"> @{request.userName}
                            &nbsp;&middot; {getTimeInterval(request.time)}</span>
                    </div>
                    <div className="mb-3">{request.request}</div>
                    <div className={request.image===""? 'd-none': ''}
                    ><img src={request.image} width="100%" alt="post_image"/>
                    </div>
                    <RequestsStats request={request}/>
                </div>
            </div>
        </li>
    );
}
export default RequestsItem;