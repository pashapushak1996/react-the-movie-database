import {useEffect} from "react";
import {getNowPlayingMovies} from "../../services/movies-service";
import {useDispatch, useSelector} from "react-redux";
import {MoviesList} from "./MoviesList";
import {setMovies} from "../../redux/reducers/moviesReducer";

export const NowPlayingMoviesList = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(({movies}) => movies);

    useEffect(() => {
        getNowPlayingMovies().then(res => dispatch(setMovies(res.results)));
    }, [dispatch]);

    return (
        <div>
            <h2>Now playing movies</h2>
            <MoviesList movies={ movies }/>
        </div>
    );
}


