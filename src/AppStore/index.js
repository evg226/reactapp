import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {reducerAlert, reducerUser} from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(
    combineReducers({
        user: reducerUser,
        alert:reducerAlert
    }),
    composeEnhancers(applyMiddleware(thunk))
)
     