import React, {useState} from "react";

const LoginComponent = () => {
    const [values, setValues] = useState({
                                             password: "",
                                             showPassword: false,
                                         });
    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card my-5">
                            <form action={"/"} className="card-body p-lg-4"
                                  style={{backgroundColor: "#ebf2fa"}}>
                                <div className="text-center">
                                    <img
                                        src="/images/donate.jpg"
                                        className="img-fluid img-thumbnail rounded-circle my-3"
                                        width="200" alt="profile"/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="login-user"
                                           aria-describedby="userHelp" placeholder="Username" required/>
                                </div>
                                <div className="mb-3">
                                    <input type={values.showPassword ? "text" : "password"}
                                           className="form-control" id="login-pass"
                                           placeholder="Password" required/>
                                    <label><input className="mt-2" type="checkbox"
                                                  onClick={handleClickShowPassword}/> Show Password</label>
                                </div>
                                <div className="text-center">
                                    <input type="submit"
                                           className="btn btn-color px-5 mb-3 w-100 text-white"
                                           value="Login" style={{backgroundColor: "#5a4099"}}>
                                    </input>
                                </div>
                                <div id="log-reg"
                                     className="form-text text-center mb-3 text-dark">Not
                                    Registered?&nbsp;
                                    <a href="/signup" className="fw-bold text-decoration-none"
                                       style={{color: "#5a4099"}}>
                                        Create an Account</a>
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