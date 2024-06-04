import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authCustomerReducer from "./slice/customer/authSlice";

const rootReducer = combineReducers({
    customer: combineReducers({
        auth: authCustomerReducer,
    }),
});

export const store = configureStore({
    reducer: rootReducer,
});
