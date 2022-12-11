import React, {useEffect} from "react";
import RequestsItem from "./requests-item";
import {useDispatch, useSelector} from "react-redux";
import {getRequestsThunk} from "./requests-thunk";

const RequestsList = () => {
    const {requests, loading} = useSelector(state => state.requests)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRequestsThunk())
    }, [])
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                requests.length===0 &&
                <li className="list-group-item">
                    No requests found.
                </li>
            }
            {
                requests.map(request => <RequestsItem key={request._id} request={request}/>)
            }
        </ul>
    );
}

export default RequestsList;