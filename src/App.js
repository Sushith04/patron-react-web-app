import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Paytron from "./paytron";
import SignUpComponent from "./paytron/sign-up";
import LoginComponent from "./paytron/login";

function App() {
    return (
        <div className="container mt-4 mb-4">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/*" element={<Paytron/>}/>
                        <Route path="/signup" element={<SignUpComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;