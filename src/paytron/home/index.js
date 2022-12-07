import React from "react";
import RequestsList from "../requests/requests-list";
import CreateRequest from "./create-request";

const HomeComponent = () => {
    return(
        <>
            <CreateRequest/>
            <RequestsList/>
        </>
    );
};
export default HomeComponent;