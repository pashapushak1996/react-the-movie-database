import {SET_IS_LOADING, SET_MOVIE, SET_MOVIES_LIST} from "../action-types";
import {getGenres, getMovieDetails, getMoviesList} from "../../services";
import {
    setCurrentPage,
    setGenreId,
    setIsLoading,
    setMovie,
    setMoviesList,
    setTotalItemsCount
} from "../action-creators";


const initialState = {
    moviesList: [],
    movie: null,
    isLoading: false,
};


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

    if (genreId && !currPage) {
        dispatch(setGenreId(genreId));
        dispatch(setCurrentPage(1));
    }

    try {
        dispatch(setIsLoading(true));

        const [
            {value: {total_results, results}},
            {value: {genres}}] = await Promise.allSettled([getMoviesList(currPage, genreId), getGenres()]);

        dispatch(setTotalItemsCount(total_results));


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
    try {
        dispatch(setIsLoading(true));
        dispatch(setMovie(await getMovieDetails(id)));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(setIsLoading(false));
    }

};