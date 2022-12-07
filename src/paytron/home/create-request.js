// import {createTuitThunk} from "../../services/tuits-thunks";
// import {useDispatch} from "react-redux";
import React, {useState} from "react";
// import axios from "axios";

const CreateRequest = () => {
    let [createRequest, setCreateRequest] = useState('');

    // const dispatch = useDispatch();
    // const tuitClickHandler = () => {
    //     const newTuit = {
    //         tuit: whatsHappening,
    //         userName: "NASA",
    //         image: "/images/nasa.jpg",
    //         time: "now",
    //         handle: "@nasa"
    //     }
    //     dispatch(createTuitThunk(newTuit));
    // }

    const state = {
        selectedFile: null
    };

    const onFileChange = event => {
        this.setState({selectedFile: event.target.files[0]});

    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            state.selectedFile,
            state.selectedFile.name
        );

        console.log(state.selectedFile);

        // axios.post("api/uploadfile", formData);
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
                            // onClick={tuitClickHandler}
                            onClick={onFileUpload}>
                            Request
                        </button>
                        <div className="pt-3" style={{color: "#5a4099", fontSize: "14px"}}>
                            <input type="file" onChange={onFileChange}/>
                            <span>File Name: {state.selectedFile.name}</span>
                            {/*<i className="bi bi-card-image me-3" onClick={}></i>*/}
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
                            // onClick={tuitClickHandler}
                            onClick={onFileUpload}>
                            Request
                        </button>
                        <div className="pt-3" style={{color: "#5a4099", fontSize: "14px"}}>
                            <input type="file" onChange={onFileChange}/>
                            {/*<i className="bi bi-card-image me-3" onClick={}></i>*/}
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