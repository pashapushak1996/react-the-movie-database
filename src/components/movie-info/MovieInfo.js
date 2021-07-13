import styles from "./MovieInfo.module.css";
import {PosterPreview} from "../poster-preview";
import {GenreBadge} from "../genre-badge";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getMoviesDetailsThunk} from "../../redux/reducers/movies-reducer";
import {imageUrlCreator, dateToString} from "../../utils/helpers";

export const MovieInfo = () => {

    const {movie} = useSelector(state => state.moviesReducer);

    const dispatch = useDispatch();

    let {id} = useParams();

    useEffect(() => {
        dispatch(getMoviesDetailsThunk(id));
    }, [id]);


    return (
        movie &&
        <div className={ styles.item } style={ {
            backgroundImage: `url("${ imageUrlCreator(500, movie.backdrop_path) }")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        } }>
            <PosterPreview movieId={ movie.id }
                           width={ 500 }
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