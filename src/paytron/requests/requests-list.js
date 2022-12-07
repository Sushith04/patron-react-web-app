import React from "react";
import RequestsItem from "./requests-item";
import {useSelector} from "react-redux";

const RequestsList = () => {
    const requestsArray = useSelector(state => state.requests)
    return (
        <ul className="list-group">
            {
                requestsArray.map(request => <RequestsItem key={request._id} request={request}/>)
            }
        </ul>
    );
}

export default RequestsList;