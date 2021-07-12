import {CHANGE_SEARCH_VALUE, SET_MOVIES_LIST} from "../action-types/movies-action-types";

export const setMoviesList = (payload) => ({
    type: SET_MOVIES_LIST, payload
});

export const changeSearchValue = (payload) => ({
    type: CHANGE_SEARCH_VALUE, payload
});