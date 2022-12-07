import React from "react";
import InterestsItem from "./interests-item";
import {useSelector} from "react-redux";

const InterestsList = () => {
    const interestsArray = useSelector((state) => state.interests);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3 style={{color: "#5a4099"}}>Interests</h3>
            </li>
            {
                interestsArray.map(
                    interest => <InterestsItem key={interest._id} interest={interest}/>)
            }
        </ul>
    );
};

export default InterestsList;