import {useEffect} from "react";
import {getPopularMovies} from "../../services/movies-service";
import {useDispatch, useSelector} from "react-redux";
import {MoviesList} from "./MoviesList";
import {setMovies} from "../../redux/reducers/moviesReducer";

export const PopularMoviesList = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(({movies}) => movies);

    useEffect(() => {
        getPopularMovies().then(res => dispatch(setMovies(res.results)));
    }, [dispatch]);

    return (
        <div>
            <h2>Popular</h2>
            <MoviesList movies={ movies }/>
        </div>
    );
}


