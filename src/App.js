import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Paytron from "./paytron";
import RegisterComponent from "./paytron/register";
import LoginComponent from "./paytron/login";

function App() {
    return (
        <div className="container mt-4 mb-4">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/*" element={<Paytron/>}/>
                        <Route path="/home/*" element={<Paytron/>}/>
                        <Route path="/register" element={<RegisterComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;