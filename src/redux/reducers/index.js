import {combineReducers} from "redux";
import {moviesReducer} from "./movies-reducer";
import {paginationReducer} from "./pagination-reducer";


export const mainReducer = combineReducers({moviesReducer, paginationReducer});