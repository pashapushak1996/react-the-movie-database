import React from 'react';
import {Badge} from 'reactstrap';
import styles from './GenreBadge.module.css';
import {useHistory} from "react-router-dom";
import {getAllMoviesWithGenres} from "../../redux/";
import {useDispatch} from "react-redux";
import {genreToClassName} from "../../utils/helpers";
import {setGenreName} from "../../redux/action-creators";

export const GenreBadge = ({genres}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    return (<div className={ styles.container }>

            { genres.map((genre) => {

                const genreClassName = genreToClassName(genre);

                return <Badge
                    onClick={ () => {
                        dispatch(getAllMoviesWithGenres('', genre.id));
                        history.push(`/movies`);
                        dispatch(setGenreName(genre.name))
                    } }
                    key={ genre.id }
                    className={ styles[genreClassName] }>{ genre.name }</Badge>
            }) }
        </div>
    );
};

