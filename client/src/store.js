// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";
// import propertyReducer from "../features/properties/propertySlice";

// export const store = configureStore({
// 	reducer: {
// 		properties: propertyReducer,
// 		auth: authReducer,
// 	},
// });

import { applyMiddleware,createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from "redux-thunk"
import rootReducer from "./reducers"


const initialState={};

const middleware={reduxThunk}

const store= createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store