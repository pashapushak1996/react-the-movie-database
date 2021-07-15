import {MovieListCard} from "../movie-list-card";
import styles from './MoviesList.module.css';
import {Paginator} from "../pagination";
import {Preloader} from "../preloader/Preloader";
import {useSelector} from "react-redux";


export const MoviesList = ({moviesList, match: {url}, genreName}) => {

    const isLoading = useSelector(({moviesReducer}) => moviesReducer.isLoading);

    if (isLoading) {
        return <Preloader/>
    }

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
};


