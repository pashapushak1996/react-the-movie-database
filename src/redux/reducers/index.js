import {combineReducers} from "redux";
import {moviesReducer} from "./movies-reducer/movies-reducer";
import {paginationReducer} from "./pagination-reducer/pagination-reducer";


export const mainReducer = combineReducers({moviesReducer, paginationReducer});