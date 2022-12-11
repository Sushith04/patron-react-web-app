import React, {useEffect} from "react";
import InterestsItem from "./interests-item";
import {useDispatch, useSelector} from "react-redux";
import {getUserInterestsThunk} from "../services/users-thunk";

const InterestsList = ({currentUser}) => {
    const {interestsArray} = useSelector((state) => state.interests);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getUserInterestsThunk(currentUser._id))
    }, [])

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3 style={{color: "#5a4099"}}>Interests</h3>
            </li>
            {
                interestsArray.length===0 &&
                <li className="list-group-item">
                    No interests expressed yet.
                </li>
            }
            {
                interestsArray.map(
                    interest => <InterestsItem key={interest._id} interest={interest}/>)
            }
        </ul>
    );
};

export default InterestsList;