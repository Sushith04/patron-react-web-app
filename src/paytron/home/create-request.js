import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {createRequestThunk} from "../requests/requests-thunk"

const CreateRequest = () => {
    const {currentUser} = useSelector((state) => state.users)
    let [requestTitle, setRequestTitle] = useState('')
    let [createRequest, setCreateRequest] = useState('');
    let [requestDonation, setRequestDonation] = useState(0);

    if (currentUser) {
        var isDonor = (currentUser.role === "DONOR");
    }

    const dispatch = useDispatch();

    const onFileUpload = () => {
        if (!currentUser) {
            window.alert("Login to create a request");
            return
        }
        if (requestTitle.length === 0 || createRequest.length === 0) {
            window.alert("Fill all the fields to make a request");
            return;
        }
        const newRequest = {
            name: currentUser.name,
            userName: currentUser.username,
            time: Math.floor(Date.now() / 1000),
            title: requestTitle,
            request: createRequest,
            donation: requestDonation,
            userid: currentUser._id
        }
        setRequestTitle("");
        setCreateRequest("");
        setRequestDonation(0);
        dispatch(createRequestThunk(newRequest));
    };

    return (
        <form>
            {isDonor ? "" :
             <div>
                 <div className="row">
                     <div className="col-7 col-sm-8 col-md-9">
                         <input type="text" value={requestTitle} placeholder="Request title"
                                className="form-control mb-2" style={{boxShadow: "none"}}
                                onChange={(event) => setRequestTitle(event.target.value)} required/>
                     </div>
                     <div className="col-5 col-sm-4 col-md-3">
                         <input type="number" value={requestDonation} placeholder="Donation"
                                className="form-control mb-2" style={{boxShadow: "none"}}
                                onChange={(event) => setRequestDonation(event.target.value)}
                                required />
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-12">
                <textarea value={createRequest} placeholder="Make a request"
                          className="form-control" style={{boxShadow: "none"}}
                          onChange={(event) => setCreateRequest(event.target.value)} required>
                </textarea>
                     </div>
                     <div>
                         <button
                             className="rounded-pill btn float-end mt-2 ps-3 pe-3 fw-bold text-white"
                             style={{backgroundColor: "#5a4099"}}
                             type="submit"
                             onClick={onFileUpload}>
                             Request
                         </button>
                     </div>
                 </div>
                 <div className="col-12">
                     <hr/>
                 </div>
             </div>}
        </form>
    );
}

export default CreateRequest;