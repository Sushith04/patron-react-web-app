import React, {useEffect, useRef, useState} from "react";
import validator from 'validator';
import PasswordChecklist from "react-password-checklist"
import {registerThunk} from "../services/users-thunk";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";


const RegisterComponent = () => {
    const {currentUser, registerError, registerSuccess} = useSelector((state) => state.users)
    const [values, setValues] = useState({
                                             password: "",
                                             showPassword: false,
                                         });
    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };
    const dispatch = useDispatch()
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const [emailError, setEmailError] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value;
        if (!validator.isEmail(email)) {
            setEmailError('Enter valid Email')
        } else {
            setEmailError('')
            setEmail(email);
        }
    };

    const [showNGO, setShowNGO] = useState(false);
    const [showDonor, setShowDonor] = useState(false);

    const autoCompleteRef = useRef();
    const inputRef = useRef();
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current
        );
    }, []);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [ngoHead, setngoHead] = useState("");
    const [ngoDesc, setngoDesc] = useState("");
    const [ngoCause, setngoCause] = useState("");
    const [donorProf, setdonorProf] = useState("");
    const [donorSalary, setdonorSalary] = useState("");
    const [donorMaxDon, setdonorMaxDon] = useState("");
    const handleRegisterBtn = () => {
        const role = showNGO? "NGO": "DONOR";
        dispatch(registerThunk({name, username,
                                   password, email, phone, address,
                                   role, ngoHead, ngoDesc, ngoCause,
            donorProf, donorSalary, donorMaxDon
                               }))
    }

    if (currentUser) {
        return (<Navigate to={"/home"}/>)
    }

    if (registerSuccess===true) {
        return (<Navigate to={"/login"}/>)
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
                                <div className="mb-2 text-danger">{registerError}</div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="reg-name"
                                           placeholder="Name"
                                           value={name}
                                           onChange={(e) => setName(e.target.value)}
                                           required/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="reg-user"
                                           placeholder="Username"
                                           value={username}
                                           onChange={(e) => setUsername(e.target.value)}
                                           required/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="reg-email"
                                           placeholder="Email Address"
                                           onChange={(e) => validateEmail(e)
                                           }
                                           required/>
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                    }}>{emailError}</span>
                                </div>
                                <div className="mb-3">
                                    <input type="tel" className="form-control" id="reg-phone"
                                           placeholder="Phone Number(10 digits)"
                                           pattern="[0-9]{10}"
                                           value={phone}
                                           onChange={(e) => setPhone(e.target.value)}
                                           required/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="reg-address"
                                           ref={inputRef}
                                           placeholder="Address"
                                           value={address}
                                           onChange={(e) => setAddress(e.target.value)}
                                           required/>
                                </div>
                                <div className="mb-3">
                                    <input type={values.showPassword ? "text" : "password"}
                                           className="form-control mb-3"
                                           onChange={e => setPassword(e.target.value)}
                                           id="reg-pass" placeholder="Password" required/>
                                    <input type={values.showPassword ? "text" : "password"}
                                           className="form-control"
                                           onChange={e => setPasswordAgain(e.target.value)}
                                           id="reg-pass-confirm" placeholder=" Confirm Password" required/>
                                    <label><input className="mt-2" type="checkbox"
                                                  onClick={handleClickShowPassword}/> Show Password</label>
                                    <PasswordChecklist
                                        rules={["minLength", "specialChar", "number", "capital",
                                                "match"]}
                                        minLength={8}
                                        value={password}
                                        valueAgain={passwordAgain}
                                        onChange={() => {
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Who do you want to register as?
                                        <select
                                            className="form-control"
                                            id="designation"
                                            type="text"
                                            onChange={(e) => {
                                                if (e.target.value === "1") {
                                                    setShowNGO(true);
                                                    setShowDonor(false);
                                                } else if (e.target.value === "2") {
                                                    setShowDonor(true);
                                                    setShowNGO(false);
                                                } else {
                                                    setShowNGO(false);
                                                    setShowDonor(false);
                                                }
                                            }}
                                            placeholder="Your Designation"
                                            required>
                                            <option value="">Please Select</option>
                                            <option value="1">NGO</option>
                                            <option value="2">Donor</option>
                                        </select>
                                    </label>
                                </div>
                                {
                                    showNGO && <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    id="reg-head"
                                                    type="text"
                                                    placeholder="Name of the NGO Head"
                                                    value={ngoHead}
                                                    onChange={(e) => setngoHead(e.target.value)}
                                                    required
                                                />
                                            </div>
                                }
                                {
                                    showNGO && <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    id="reg-des"
                                                    type="text"
                                                    placeholder="NGO Description"
                                                    value={ngoDesc}
                                                    onChange={(e) => setngoDesc(e.target.value)}
                                                    required
                                                />
                                            </div>
                                }
                                {
                                    showNGO && <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    id="reg-cause"
                                                    type="text"
                                                    placeholder="Primary Cause"
                                                    value={ngoCause}
                                                    onChange={(e) => setngoCause(e.target.value)}
                                                    required
                                                />
                                            </div>
                                }
                                {
                                    showDonor && <div className="mb-3">
                                                  <input
                                                      className="form-control"
                                                      id="reg-prof"
                                                      type="text"
                                                      placeholder="Profession"
                                                      value={donorProf}
                                                      onChange={(e) => setdonorProf(e.target.value)}
                                                      required
                                                  />
                                              </div>
                                }
                                {
                                    showDonor && <div className="mb-3">
                                                  <input
                                                      className="form-control"
                                                      id="reg-sal"
                                                      type="number"
                                                      placeholder="Salary"
                                                      value={donorSalary}
                                                      onChange={(e) => setdonorSalary(e.target.value)}
                                                      required
                                                  />
                                              </div>
                                }
                                {
                                    showDonor && <div className="mb-3">
                                                  <input
                                                      className="form-control"
                                                      id="reg-don"
                                                      type="number"
                                                      placeholder="Maximum possible donation"
                                                      value={donorMaxDon}
                                                      onChange={(e) => setdonorMaxDon(e.target.value)}
                                                      required
                                                  />
                                              </div>
                                }
                                <div className="text-center">
                                    <input
                                           type="button"
                                           className="btn btn-color px-5 mb-3 w-100 text-white"
                                           style={{backgroundColor: "#5a4099"}}
                                           onClick={handleRegisterBtn}
                                           value="Register"
                                    >
                                    </input>
                                </div>
                                <div id="reg-log"
                                     className="form-text text-center mb-3 text-dark">Already
                                    Registered?&nbsp;
                                    <a href="/login" className="fw-bold text-decoration-none"
                                       style={{color: "#5a4099"}}> Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RegisterComponent;