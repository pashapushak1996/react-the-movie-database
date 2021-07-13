import {CHANGE_SEARCH_VALUE, SET_IS_LOADING, SET_MOVIE, SET_MOVIES_LIST} from "../action-types/movies-action-types";

export const setMoviesList = (payload) => ({
    type: SET_MOVIES_LIST, payload
});


export const changeSearchValue = (payload) => ({
    type: CHANGE_SEARCH_VALUE, payload
});


export const setMovie = (payload) => ({
    type: SET_MOVIE, payload
});


export const setIsLoading = (payload) => ({
    type: SET_IS_LOADING, payload
});