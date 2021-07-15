import {Paginator} from "../pagination";
import styles from "./MoviesList.module.css";
import {MovieListCard} from "../movie-list-card";

export const MoviesList = ({genreName, moviesList, url}) => {

    return (
        <div>
            <Paginator/>
            { genreName && <div>
                <b>Genre: </b>
                <span>{ genreName }</span>
            </div> }
            <div className={ styles.movieListItems }>
                { moviesList.map((movie) => <MovieListCard
                    url={ url }
                    key={ movie.id }
                    movie={ movie }/>) }</div>
        </div>
    );
}


