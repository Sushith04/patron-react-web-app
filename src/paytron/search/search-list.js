import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const SearchList = ({searchResult}) => {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.users);

    function shift() {
        if (!currentUser) {
            window.alert("Please login to view profile.")
            return
        }

        if (searchResult._id === currentUser._id) {
            navigate(`/profile`);
        } else {
            navigate(`/view-profile`, {state: {id: searchResult}});
        }
    }

    return (
        <>
            <li className="list-group-item" type="button" onClick={shift}>
                <div className="row">
                    <div className="col">
                        <div className="fw-bolder mb-2">{searchResult.name}
                            <span className="text-secondary fw-normal"> @{searchResult.username}
                                <span className="float-end mt-4 fa fa-greater-than"
                                      style={{color: "#5a4099"}}></span></span>
                        </div>
                        <div className="mb-3">{searchResult.role}</div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default SearchList;