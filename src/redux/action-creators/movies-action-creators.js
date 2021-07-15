import {SET_IS_LOADING, SET_MOVIE, SET_MOVIES_LIST} from "../action-types";

export const setMoviesList = (payload) => ({
    type: SET_MOVIES_LIST, payload
});


export const setMovie = (payload) => ({
    type: SET_MOVIE, payload
});


export const setIsLoading = (payload) => ({
    type: SET_IS_LOADING, payload
});