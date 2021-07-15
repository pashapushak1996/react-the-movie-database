import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getMoviesDetailsThunk} from "../../redux/";
import {MovieInfo} from "./MovieInfo";
import {Preloader} from "../preloader";


export const MovieInfoContainer = () => {

    const {movie, isLoading} = useSelector(state => state.moviesReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(getMoviesDetailsThunk(id));
    }, [id]);


    if (isLoading) {
        return <Preloader/>
    }


    return (
        <MovieInfo movie={ movie }/>
    );
}