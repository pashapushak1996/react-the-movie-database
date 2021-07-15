import styles from './MovieListCard.module.css';
import {PosterPreview} from "../poster-preview";
import {GenreBadge} from "../genre-badge";
import {StarsRating} from "../stars-rating";
import {dateToString} from "../../utils/helpers";


export const MovieListCard = ({movie, url}) => {

    return (
        <div className={ styles.movieItem }>
            <div className={ styles.movieItem_image }>
                { movie.poster_path && <PosterPreview movieId={ movie.id }
                                                      url={ url }
                                                      width={ 200 }
                                                      imageUrl={ movie.poster_path }
                                                      movieName={ movie.title }/> }
                <h4>{ movie.title }</h4>
                <div>
                    <b>Release date: </b>
                    <span>{ dateToString(movie.release_date) }</span>
                </div>
            </div>
            <GenreBadge genres={ movie.movieGenres }/>
            <StarsRating movieRating={ movie.vote_average }/>
        </div>
    );
};


