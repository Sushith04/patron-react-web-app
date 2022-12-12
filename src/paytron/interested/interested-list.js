import React, {useEffect} from "react";
import InterestedItem from "./interested-item";
import {useDispatch, useSelector} from "react-redux";
import {getNGOInterestedDonorThunk} from "../services/users-thunk";

const InterestedList = ({currentUser}) => {
    // Get interested donors of current logged in Donor.
    const {interestedArray} = useSelector((state) => state.interested);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNGOInterestedDonorThunk(currentUser._id))
    }, [])

    return (
        <ul className="list-group">
            <li className="list-group-item text-center">
                <h3 style={{color: "#5a4099"}}>Interested Donors</h3>
            </li>
            {
                interestedArray.length===0 &&
                <li className="list-group-item">
                    No Interested Donors yet.
                </li>
            }
            {
                interestedArray.map(
                    interestedDonor => <InterestedItem key={interestedDonor._id} interestedDonor={interestedDonor}/>)
            }
        </ul>
    );
};

export default InterestedList;