import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./index.css"

const Navigation = () => {
    const {pathname} = useLocation()
    const paths = pathname.split('/')
    return (
        <div className="list-group">
            <Link to="/home" className={`list-group-item`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-hand-holding-heart"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Paytron</span>
                    </div>
                </div>
            </Link>

            <Link to="/home" className={`list-group-item ${paths[1] === 'home'?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-house-chimney"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Home</span>
                    </div>
                </div>
            </Link>

            <Link to="/search" className={`list-group-item ${paths[1] === 'search'?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-search"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Search</span>
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

            <Link to="/register" className={`list-group-item ${paths[1] === 'register'?'active': ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-user-plus"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Register</span>
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

export default Navigation;