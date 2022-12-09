import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {createRequestThunk} from "../requests/requests-thunk"

const CreateRequest = () => {
    const {currentUser} = useSelector((state) => state.users)
    let [requestTitle, setRequestTitle] = useState('')
    let [createRequest, setCreateRequest] = useState('');

    const dispatch = useDispatch();

    const onFileUpload = () => {
        if (!currentUser) {
            window.alert("Login to create a request");
            return
        }
        const newRequest = {
            name: currentUser.name,
            userName: currentUser.username,
            time: Math.floor(Date.now() / 1000),
            title: requestTitle,
            request: createRequest
        }
        setRequestTitle("");
        setCreateRequest("");
        dispatch(createRequestThunk(newRequest));
    };

    return (
        <form>
        <div className="row">
            <div className="col-2 col-md-1">
                <img src="/images/donate.jpg" width={40} alt="profile_pic"/>
            </div>
            <div className="col-10 col-md-11">
                <input type="text" value={requestTitle} placeholder="Request title"
                       className="form-control mb-2" style={{boxShadow: "none"}}
                       onChange={(event) => setRequestTitle(event.target.value)} required/>
                <textarea value={createRequest} placeholder="Make a request"
                          className="form-control" style={{boxShadow: "none"}}
                          onChange={(event) => setCreateRequest(event.target.value)} required>
                </textarea>
                <div>
                    <button
                        className="rounded-pill btn float-end mt-2 ps-3 pe-3 fw-bold text-white"
                        style={{backgroundColor: "#5a4099"}}
                        type="submit"
                        onClick={onFileUpload}>
                        Request
                    </button>
                    <div className="pt-3" style={{color: "#5a4099", fontSize: "14px"}}>
                        <input type="file" name="upload_file" accept="image/*" id="input-file"
                            // onChange={onFileChange}
                        />
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
        </form>
    );
}

export default CreateRequest;