import {MovieListCard} from "../movie-list-card";
import classes from './MoviesList.module.css';
import {Paginator} from "../pagination";


export const MoviesList = ( {moviesList, match: {url}}) => {

    return (
        <div>
            <Paginator/>

            <div
                className={ classes.movieListItems }
            >{ moviesList.map((movie) => <MovieListCard
                                                        url={ url }
                                                        key={ movie.id }
                                                        movie={ movie }/>) }</div>
        </div>
    );
};


