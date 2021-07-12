import {applyMiddleware, createStore} from "redux";

import {mainReducer} from "./reducers";
import thunk from "redux-thunk";


export const store = createStore(mainReducer, applyMiddleware(thunk));
