import styles from "./MovieInfo.module.css";
import {dateToString, dynamicBackgroundImageForElement} from "../../utils/helpers";
import {PosterPreview} from "../poster-preview";
import {GenreBadge} from "../genre-badge";
import {Preloader} from "../preloader";

export const MovieInfo = ({movie, isLoading}) => {

    if (isLoading) {
        return <Preloader/>
    }

    return (
        movie &&
        <div className={ styles.item } style={ dynamicBackgroundImageForElement(movie.backdrop_path) }>
            <div className={ styles.item_bg }></div>
            <PosterPreview movieId={ movie.id }
                           width={ 300 }
                           imageUrl={ movie.poster_path }
                           movieName={ movie.original_title }/>
            <div>
                <h2>{ movie.original_title }</h2>
                <div>
                    <b>Release date: </b>
                    <span>{ dateToString(movie.release_date) }</span>
                </div>
                <GenreBadge genres={ movie.genres }/>
                <a href={ movie.homepage }>Link to watch</a>
                <div>
                    <h4>Overview: </h4>
                    <p>{ movie.overview }</p>
                </div>
            </div>
        </div>
    );
}


