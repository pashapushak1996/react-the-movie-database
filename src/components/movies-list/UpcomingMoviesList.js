import {useEffect} from "react";
import {getUpcomingMovies} from "../../services/movies-service";
import {useDispatch, useSelector} from "react-redux";
import {MoviesList} from "./MoviesList";
import {setMovies} from "../../redux/reducers/moviesReducer";

export const UpcomingMoviesList = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(({movies}) => movies);

    useEffect(() => {
        getUpcomingMovies().then(res => dispatch(setMovies(res.results)));
    }, [dispatch]);

    return (
        <div>
            <h2>Upcoming movies</h2>
            <MoviesList movies={ movies }/>
        </div>
    );
}


