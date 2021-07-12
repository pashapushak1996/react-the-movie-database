import {SET_MOVIES_LIST} from "../../action-types/movies-action-types";
import {getGenres, getMovieDetails, getMoviesList} from "../../../services";
import {setMoviesList} from "../../action-creators/movies-action-creators";
import {setCurrentPageCreator, setTotalItemsCountCreator} from "../../action-creators/pagination-action-creators";

const SET_MOVIE = "SET_MOVIE";
const SET_IS_LOADING = "SET_IS_LOADING";


const setMovie = (payload) => ({type: SET_MOVIE, payload});
const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload});


const initialState = {
    moviesList: [],
    movie: null,
    isLoading: false,
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES_LIST: {
            return {...state, moviesList: action.payload};
        }
        case SET_MOVIE: {
            return {...state, movie: action.payload}
        }
        case SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        default:
            return state;
    }
}


//Thunk


export const getAllMoviesWithGenres = (currPage, genreId) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const [{
            value: {page, total_results, results}
        },
            {value: {genres}}] =
            await Promise.allSettled([getMoviesList(currPage, genreId), getGenres()]);

        dispatch(setTotalItemsCountCreator(total_results));


        if (currPage === page) {
            dispatch(setCurrentPageCreator(page));
        }

        const moviesWithGenres = results.map((movie) => {
            movie.movieGenres = genres.filter((genre) => movie.genre_ids.includes(genre.id));
            return movie;
        });

        dispatch(setMoviesList(moviesWithGenres));

    } catch (e) {
        console.log(e);
    } finally {
        dispatch(setIsLoading(false));
    }
};


export const getMoviesDetailsThunk = (id) => async (dispatch) => {
    dispatch(setMovie(await getMovieDetails(id)));
};