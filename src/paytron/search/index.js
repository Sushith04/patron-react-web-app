import React, {useState} from "react";
import SearchList from "./search-list";
import {useDispatch, useSelector} from "react-redux";
import {getUsersThunk} from "../services/users-thunk";

const SearchComponent = () => {
    const {loading} = useSelector(state => state.requests)
    const [search, setSearch] = useState("");

    const {searchResults, isThere} = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const searchUser = () => {
        dispatch(getUsersThunk(search));
    }

    return (
        <>
            <div className="row">
                <div className="form-group has-search input-group mb-3 ">
                    <input type="text" className="form-control rounded-2"
                           value={search} onChange={(e) => setSearch(e.target.value)}
                           style={{boxShadow: "none"}} placeholder="Search Paytron"/>
                    <div className="input-group-append">
                        <button className="input-group-text text-white"
                                style={{
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    backgroundColor: "#5a4099"
                                }}
                                onClick={searchUser}>Search
                        </button>
                    </div>
                </div>
                <div>
                    <ul className="list-group">
                        {
                            loading &&
                            <li className="list-group-item">
                                Loading...
                            </li>
                        }
                        {isThere ?
                         searchResults.map(
                             (user, index) => <SearchList searchResult={user} key={index}/>)
                                 : "Nothing to show"
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};
export default SearchComponent;