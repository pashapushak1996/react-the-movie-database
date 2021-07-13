import React from 'react';
import {Badge} from 'reactstrap';
import styles from './GenreBadge.module.css';
import {useHistory} from "react-router-dom";
import {getAllMoviesWithGenres} from "../../redux/reducers/movies-reducer";
import {useDispatch} from "react-redux";
import {genreToClassName} from "../../utils/helpers";

export const GenreBadge = ({genres}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    return (<div className={ styles.container }>
            { genres && genres.map((genre) => {

                const genreStyle = genreToClassName(genre);

                return <Badge onClick={ () => {
                    dispatch(getAllMoviesWithGenres('', genre.id))
                    history.push(`/movies`)
                } } key={ genre.id }
                              className={ styles[genreStyle] }>{ genre.name }</Badge>
            }) }
        </div>
    );
};

