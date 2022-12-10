import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Paytron from "./paytron";
import RegisterComponent from "./paytron/register";
import LoginComponent from "./paytron/login";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./paytron/services/users-reducer";
import {Provider} from "react-redux";
import CurrentUser from "./paytron/current-user";
import interestsReducer from "./paytron/interests/interests-reducer";
import requestsReducer from "./paytron/requests/requests-reducer";
import profileReducer from "./paytron/profile/profile-reducer";

const store = configureStore({
                                 reducer: {
                                     users: usersReducer,
                                     interests: interestsReducer,
                                     requests: requestsReducer,
                                     currentProfile: profileReducer
                                 }
                             })

function App() {
    return (
        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <BrowserRouter>
                    <CurrentUser>
                        <div className="container">
                            <Routes>
                                <Route path="/*" element={<Paytron/>}/>
                                <Route path="/home/*" element={<Paytron/>}/>
                                <Route path="/register" element={<RegisterComponent/>}/>
                                <Route path="/login" element={<LoginComponent/>}/>
                            </Routes>
                        </div>
                    </CurrentUser>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;