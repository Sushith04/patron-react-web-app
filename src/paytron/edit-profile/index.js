import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Form from 'react-bootstrap/Form';
// import {updateProfile} from "../profile/profile-reducer";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users);

    let [name, setName] = useState(currentUser.name);
    let [profilePicture, setProfilePicture] = useState(currentUser.profilePicture);
    let [address, setAddress] = useState(currentUser.address);
    let [phone, setPhone] = useState(currentUser.phone);
    let [ngoHead, setNgoHead] = useState(currentUser.ngoHead);
    let [ngoDesc, setNgoDesc] = useState(currentUser.ngoDesc);
    let [ngoCause, setNgoCause] = useState(currentUser.ngoCause);
    let [donorProf, setdonorProf] = useState(currentUser.donorProf);
    let [donorSalary, setdonorSalary] = useState(currentUser.donorSalary);
    let [donorMaxDon, setdonorMaxDon] = useState(currentUser.donorMaxDon);

    function initialize() {
        var input = document.getElementById('editAddress');
        new window.google.maps.places.Autocomplete(input);
    }

    window.addEventListener('load', initialize)

    const dispatch = useDispatch();
    const saveProfile = (id) => {
        // dispatch(updateProfile(id));
    }

    if (currentUser) {
        var isNgo = (currentUser.role === "NGO");
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-12">
                        <div className="card"
                             style={{borderRadius: "15px", backgroundColor: "#ebf2fa"}}>
                            <div className="card-body text-center">
                                <div className="mt-3 mb-4">
                                    <img
                                        src={currentUser.profilePicture}
                                        className="rounded-circle img-fluid"
                                        style={{width: "164px", height: "164px"}} alt="profilePic"/>
                                </div>
                                <form className="card-body p-lg-4">
                                    <div className="mb-3">
                                        <Form.Control type="text" className="form-control"
                                                      id="editName"
                                                      placeholder="Name" value={name} required
                                                      onChange={(event) => setName(
                                                          event.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <Form.Control type="tel" className="form-control"
                                                      id="editPhone"
                                                      placeholder="Phone Number(10 digits)"
                                                      pattern="[0-9]{10}" value={phone} required
                                                      onChange={(event) => setPhone(
                                                          event.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <Form.Control type="text" className="form-control"
                                                      id="editAddress"
                                                      placeholder="Address" value={address} required
                                                      onChange={(event) => setAddress(
                                                          event.target.value)}/>
                                    </div>

                                    <div className="mb-3">
                                        {isNgo ? <Form.Control type="text" className="form-control"
                                                               id="editHead"
                                                               placeholder="Name of the NGO Head"
                                                               value={ngoHead} required
                                                               onChange={(event) => setNgoHead(
                                                                   event.target.value)}/> : ""}
                                    </div>
                                    <div className="mb-3">
                                        {isNgo ? <Form.Control type="text" className="form-control"
                                                               id="editDesc"
                                                               placeholder="NGO Description"
                                                               value={ngoDesc} required
                                                               onChange={(event) => setNgoDesc(
                                                                   event.target.value)}/> : ""}
                                    </div>
                                    <div className="mb-3">
                                        {isNgo ? <Form.Control type="text" className="form-control"
                                                               id="editCause"
                                                               placeholder="Primary cause"
                                                               value={ngoCause} required
                                                               onChange={(event) => setNgoCause(
                                                                   event.target.value)}/> : ""}
                                    </div>
                                    <div className="mb-3">
                                        {isNgo ? "" : <Form.Control type="text"
                                                                    className="form-control"
                                                                    id="editProf"
                                                                    placeholder="Profession"
                                                                    value={donorProf} required
                                                                    onChange={(event) => setdonorProf(
                                                                        event.target.value)}/>}
                                    </div>
                                    <div>
                                        {isNgo ? "" : <Form.Control type="number"
                                                                    className="form-control mb-3"
                                                                    id="editSalary"
                                                                    placeholder="Salary"
                                                                    value={donorSalary} required
                                                                    onChange={(event) => setdonorSalary(
                                                                        event.target.value)}/>}
                                    </div>
                                    <div>
                                        {isNgo ? "" : <Form.Control type="number"
                                                                    className="form-control mb-3"
                                                                    id="editDonation"
                                                                    placeholder="Maximum possible donation"
                                                                    value={donorMaxDon} required
                                                                    onChange={(event) => setdonorMaxDon(
                                                                        event.target.value)}/>}
                                    </div>

                                    <div className="text-center">
                                        <Link to="../profile">
                                            <button
                                                className="btn btn-color px-5 mb-3 w-100 text-white"
                                                type="submit"
                                                style={{backgroundColor: "#5a4099"}}
                                                onClick={() =>
                                                    saveProfile({
                                                                    ...currentUser,
                                                                    "name": name,
                                                                    "address": address,
                                                                    "phone": phone,
                                                                    "ngoHead": ngoHead,
                                                                    "ngoDesc": ngoDesc,
                                                                    "ngoCause": ngoCause,
                                                                    "donorProf": donorProf,
                                                                    "donorSalary": donorSalary,
                                                                    "donorMaxDon": donorMaxDon
                                                                })}>Update
                                            </button>
                                        </Link>
                                    </div>
                                    <div id="reg-log"
                                         className="form-text text-center mb-3 text-dark">Do not
                                        want to make any changes?&nbsp;
                                        <a href="/profile" className="fw-bold text-decoration-none"
                                           style={{color: "#5a4099"}}> Go back</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfileComponent;