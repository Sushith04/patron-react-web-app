// import {createTuitThunk} from "../../services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
// import axios from "axios";
import {createRequestThunk} from "../requests/requests-thunk"
import {Navigate} from "react-router";

const CreateRequest = () => {
    const {currentUser} = useSelector((state) => state.users)
    let [createRequest, setCreateRequest] = useState('');

    const dispatch = useDispatch();

    const state = {
        selectedFile: null
    };

    const onFileChange = event => {
        this.setState({selectedFile: event.target.files[0]});
    };

    const onFileUpload = () => {
        if (!currentUser) {
            window.alert("Login to create a request");
            return
        }
        const formData = new FormData();
        // formData.append(
        //     "myFile",
        //     state.selectedFile,
        //     state.selectedFile.name
        // );
        console.log(state.selectedFile);
        // axios.post("api/uploadfile", formData);
        const newRequest = {
            name: currentUser.name,
            userName: currentUser.username,
            time: Math.floor(Date.now() / 1000),
            request: createRequest
        }
        setCreateRequest("");
        dispatch(createRequestThunk(newRequest));
    };

    if (state.selectedFile) {
        return (
            <div className="row">
                <div className="col-2">
                    <img src="/images/donate.jpg" width={60} alt="profile_pic"/>
                </div>
                <div className="col-10">
       <textarea value={createRequest} placeholder="Make a request"
                 className="form-control border-0"
                 onChange={(event) => setCreateRequest(event.target.value)}>
       </textarea>
                    <div>
                        <button
                            className="rounded-pill btn float-end mt-2 ps-3 pe-3 fw-bold text-white"
                            style={{backgroundColor: "#5a4099"}}
                            onClick={onFileUpload}>
                            Request
                        </button>
                        <div className="pt-3" style={{color: "#5a4099", fontSize: "14px"}}>
                            <input type="file" onChange={onFileChange}/>
                            <span>File Name: {state.selectedFile.name}</span>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row">
                <div className="col-2">
                    <img src="/images/donate.jpg" width={60} alt="profile_pic"/>
                </div>
                <div className="col-10">
       <textarea value={createRequest} placeholder="Make a request"
                 className="form-control border-0"
                 onChange={(event) => setCreateRequest(event.target.value)}>
       </textarea>
                    <div>
                        <button
                            className="rounded-pill btn float-end mt-2 ps-3 pe-3 fw-bold text-white"
                            style={{backgroundColor: "#5a4099"}}
                            onClick={onFileUpload}>
                            Request
                        </button>
                        <div className="pt-3" style={{color: "#5a4099", fontSize: "14px"}}>
                            <input type="file" onChange={onFileChange}/>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr/>
                </div>
            </div>
        );
    }
}

export default CreateRequest;