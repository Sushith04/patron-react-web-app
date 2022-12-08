import React, {useState} from "react";
import {loginThunk} from "../services/users-thunk";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";

const LoginComponent = () => {
    const {currentUser, loginError} = useSelector((state) => state.users)
    const [values, setValues] = useState({
                                             password: "",
                                             showPassword: false,
                                         });
    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginBtnHandle = () => {

        dispatch(loginThunk({
                                username, password
                            }));
    }

    if (currentUser) {
        return (<Navigate to={"/home"}/>)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card my-5">
                            <form className="card-body p-lg-4"
                                  style={{backgroundColor: "#ebf2fa"}}>
                                <div className="text-center">
                                    <img
                                        src="/images/donate.jpg"
                                        className="img-fluid img-thumbnail rounded-circle my-3"
                                        width="200" alt="profile"/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="login-user"
                                           aria-describedby="userHelp" placeholder="Username"
                                           value={username}
                                           onChange={(e) => setUsername(e.target.value)}
                                           required/>
                                </div>
                                <div className="mb-2">
                                    <input type={values.showPassword ? "text" : "password"}
                                           className="form-control" id="login-pass"
                                           placeholder="Password"
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           required/>
                                    <label><input className="mt-2" type="checkbox"
                                                  onClick={handleClickShowPassword}/> Show Password</label>
                                </div>
                                <div className="mb-3 text-danger">{loginError}</div>
                                <div className="text-center">
                                    <input
                                        type="button"
                                        className="btn btn-color px-5 mb-3 w-100 text-white"
                                        style={{backgroundColor: "#5a4099"}}
                                        onClick={loginBtnHandle}
                                        value="Login"
                                    >
                                    </input>
                                </div>
                                <div id="log-reg"
                                     className="form-text text-center mb-3 text-dark">Not
                                    Registered?&nbsp;
                                    <a href="/register" className="fw-bold text-decoration-none"
                                       style={{color: "#5a4099"}}>
                                        Create an Account</a>
                                </div>
                                <div id="log-guest"
                                     className="form-text text-center mb-3 text-dark">Continue
                                    as&nbsp;
                                    <a href="/home" className="fw-bold text-decoration-none"
                                       style={{color: "#5a4099"}}>Guest</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LoginComponent;