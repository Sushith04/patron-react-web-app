import React from "react";
import InterestedItem from "./interested-item";
import {useSelector} from "react-redux";

const InterestedList = () => {
    //const interestedArray = useSelector((state) => state.interested);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3 style={{color: "#5a4099"}}>Interested</h3>
            </li>
            {
                // interestedArray.map(
                //     interested => <InterestedItem key={interested._id} interested={interested}/>)
            }
        </ul>
    );
};

export default InterestedList;