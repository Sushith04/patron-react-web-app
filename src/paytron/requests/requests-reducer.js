import { createSlice } from "@reduxjs/toolkit";
import requests from './requests.json';

const requestsSlice = createSlice({
                                   name: 'requests',
                                   initialState: requests
                               });

export default requestsSlice.reducer;