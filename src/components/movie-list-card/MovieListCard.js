import classes from './MovieListCard.module.css';
import {PosterPreview} from "../poster-preview";
import {GenreBadge} from "../genre-badge";
import {StarsRating} from "../stars-rating";


export const MovieListCard = ({movie, url}) => {
    return (
        <div className={ classes.movieItem }>
            <h1>{ movie.title }</h1>
            { movie.poster_path && <PosterPreview movieId={ movie.id }
                                                  url={ url }
                                                  width={ 200 }
                                                  imageUrl={ movie.poster_path }
                                                  movieName={ movie.title }/> }
            <GenreBadge genres={ movie.movieGenres }/>
            <StarsRating movieRating={ movie.vote_average }/>
        </div>
    );
};


