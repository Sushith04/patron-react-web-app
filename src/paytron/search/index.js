import React from "react";
import "./index.css";

const SearchComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control rounded-pill" style={{boxShadow: "none"}}
                               placeholder="Search Paytron"/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SearchComponent;