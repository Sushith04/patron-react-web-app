import React from "react";
import "./index.css";

const AdminComponent = () => {
    return (
        <div>
            <h1 className="wd-header text-center fw-bold">DASHBOARD</h1>
            <h2>NGO's</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered mb-5">
                    <thead className="wd-th">
                    <tr className="text-nowrap">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">NGO Head Name</th>
                        <th scope="col">NGO Description</th>
                        <th scope="col">Primary Cause</th>
                        <th scope="col" colSpan={2}>Approve/Reject</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="text-nowrap">Name</td>
                        <td className="text-nowrap">Username</td>
                        <td className="text-nowrap">Email Address</td>
                        <td className="text-nowrap">Phone Number</td>
                        <td className="text-nowrap">NGO Head Name</td>
                        <td>NGO Description</td>
                        <td>Primary Cause</td>
                        <td><button className="wd-approve">Approve</button></td>
                        <td><button className="wd-reject">Reject</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <h2>Donors</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered mb-5">
                    <thead className="wd-th">
                    <tr className="text-nowrap">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Max Donation</th>
                        <th scope="col" colSpan={2}>Approve/Reject</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="text-nowrap">Name</td>
                        <td className="text-nowrap">Username</td>
                        <td className="text-nowrap">Email Address</td>
                        <td className="text-nowrap">Phone Number</td>
                        <td className="text-nowrap">Profession</td>
                        <td className="text-nowrap">Salary</td>
                        <td className="text-nowrap">Max Donation</td>
                        <td><button className="wd-approve">Approve</button></td>
                        <td><button className="wd-reject">Reject</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <footer>
                <a href="/login" className="wd-bottom-button">Log Out</a>
            </footer>
        </div>
    );
};

export default AdminComponent;