//Action types
import {getMovies} from "../../services/movies-service";

const SET_MOVIES = "SET_MOVIES";

//Action creators
export const setMovies = (payload) => ({type: SET_MOVIES, payload});

//Thunk
export const fetchMovies = () => async (dispatch) => {
    const {results} = await getMovies();
    dispatch(setMovies(results));
};

const initialState = {
    movies: [],
};


export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            return {...state, movies: action.payload};
        }
        default:
            return state;
    }
}