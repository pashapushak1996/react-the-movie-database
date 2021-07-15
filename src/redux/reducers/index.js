import {combineReducers} from "redux";
import {moviesReducer} from "./movies-reducer";
import {paginationReducer} from "./pagination-reducer";
import {genresReducer} from "./genres-reducer";

export * from './genres-reducer';
export * from './movies-reducer';
export * from './pagination-reducer';


export const mainReducer = combineReducers({moviesReducer, paginationReducer, genresReducer});