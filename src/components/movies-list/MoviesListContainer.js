import {Preloader} from "../preloader/Preloader";
import {useSelector} from "react-redux";
import {MoviesList} from "./MoviesList";


export const MoviesListContainer = ({match: {url}}) => {

    const {isLoading, genreName, moviesList} = useSelector(({moviesReducer, genresReducer}) => ({
        ...moviesReducer, ...genresReducer
    }));

    if (isLoading) {
        return <Preloader/>
    }

    return (
        <MoviesList url={ url } moviesList={ moviesList } genreName={ genreName }/>
    );
};


