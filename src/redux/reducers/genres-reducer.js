import {getGenres} from "../../services";
import {SET_GENRE_ID, SET_GENRE_NAME, SET_GENRES} from "../action-types";
import {setGenres} from "../action-creators";


const initialState = {
    genres: [],
    genreId: '',
    genreName: ''
};


export const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES: {
            return {...state, genres: action.payload};
        }
        case SET_GENRE_ID: {
            return {...state, genreId: action.payload};
        }
        case SET_GENRE_NAME: {
            return {...state, genreName: action.payload};
        }
        default:
            return state;
    }
}

//Thunk

export const getAllGenres = () => async (dispatch) => {
    const {genres} = await getGenres();
    dispatch(setGenres(genres));
}