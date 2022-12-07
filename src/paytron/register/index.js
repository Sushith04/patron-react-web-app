import React, {useEffect, useRef, useState} from "react";
import validator from 'validator';
import PasswordChecklist from "react-password-checklist"

const RegisterComponent = () => {
    const [values, setValues] = useState({
                                             password: "",
                                             showPassword: false,
                                         });
    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const [emailError, setEmailError] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value;
        if (!validator.isEmail(email)) {
            setEmailError('Enter valid Email')
        } else {
            setEmailError('')
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

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card my-5">
                            <form action={"/login"} className="card-body p-lg-4"
                                  style={{backgroundColor: "#ebf2fa"}}>
                                <div className="text-center">
                                    <img
                                        src="/images/donate.jpg"
                                        className="img-fluid img-thumbnail rounded-circle my-3"
                                        width="200" alt="profile"/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="reg-name"
                                           placeholder="Name" required/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="reg-user"
                                           placeholder="Username" required/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="reg-email"
                                           placeholder="Email Address"
                                           onChange={(e) => validateEmail(e)} required/>
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                    }}>{emailError}</span>
                                </div>
                                <div className="mb-3">
                                    <input type="tel" className="form-control" id="reg-phone"
                                           placeholder="Phone Number(10 digits)"
                                           pattern="[0-9]{10}" required/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="reg-address"
                                           ref={inputRef} placeholder="Address" required/>
                                </div>
                                <div className="mb-3">
                                    <input type={values.showPassword ? "text" : "password"}
                                           className="form-control mb-3"
                                           onChange={e => setPassword(e.target.value)}
                                           id="reg-pass" placeholder="Password" required/>
                                    <input type={values.showPassword ? "text" : "password"}
                                           className="form-control"
                                           onChange={e => setPasswordAgain(e.target.value)}
                                           id="reg-pass" placeholder=" Confirm Password" required/>
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
                                            name="Your Designation"
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
                                                      required
                                                  />
                                              </div>
                                }
                                <div className="text-center">
                                    <input type="submit"
                                           className="btn btn-color px-5 mb-3 w-100 text-white"
                                           value="Register" style={{backgroundColor: "#5a4099"}}>
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