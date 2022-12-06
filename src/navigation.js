import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Navigation = () => {
    const {pathname} = useLocation()
    const paths = pathname.split('/')
    return (
        <div className="list-group">
            <Link to="/" className={`list-group-item`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-hand-holding-heart"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Paytron</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${paths[1] === ''?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-house-chimney"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Home</span>
                    </div>
                </div>
            </Link>

            <Link to="/profile" className={`list-group-item ${paths[1] === 'profile'?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Profile</span>
                    </div>
                </div>
            </Link>

            <Link to="/login" className={`list-group-item ${paths[1] === 'login'?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-sign-in"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Login</span>
                    </div>
                </div>
            </Link>

            <Link to="/signup" className={`list-group-item ${paths[1] === 'signup'?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-user-plus"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Sign Up</span>
                    </div>
                </div>
            </Link>

            <Link to="/aboutus" className={`list-group-item ${paths[1] === 'aboutus'?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-circle-info"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">About Us</span>
                    </div>
                </div>
            </Link>

            <Link to="/login" className={`list-group-item ${paths[1] === 'logout'?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-sign-out"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Logout</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navigation