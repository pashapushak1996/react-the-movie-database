import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllGenres} from "../../redux";
import {Genres} from "./Genres";

export const GenresContainer = () => {

    const dispatch = useDispatch();

    const genres = useSelector(({genresReducer}) => genresReducer.genres);

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    return (
        <div>
            <Genres genres={ genres }/>
        </div>
    );
}


