import {useEffect} from "react";
import {getTopRatedMovies} from "../../services/movies-service";
import {useDispatch, useSelector} from "react-redux";
import {MoviesList} from "./MoviesList";
import {setMovies} from "../../redux/reducers/moviesReducer";

export const TopRatedMoviesList = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(({movies}) => movies);

    useEffect(() => {
        getTopRatedMovies().then(res => dispatch(setMovies(res.results)));
    }, [dispatch]);

    return (
        <div>
            <h2>Top rated</h2>
            <MoviesList movies={ movies }/>
        </div>
    );
}


