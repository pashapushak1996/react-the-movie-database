import {SET_GENRE_ID, SET_GENRE_NAME, SET_GENRES} from "../action-types";

export const setGenres = (payload) => ({type: SET_GENRES, payload});
export const setGenreId = (payload) => ({type: SET_GENRE_ID, payload});
export const setGenreName = (payload) => ({type: SET_GENRE_NAME, payload});