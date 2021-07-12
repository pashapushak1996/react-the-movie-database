import React from 'react';
import {Badge} from 'reactstrap';
import styles from './GenreBadge.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useHistory
} from "react-router-dom";
import {getAllMoviesWithGenres} from "../../redux/reducers/movies-reducer/movies-reducer";
import {useDispatch} from "react-redux";

export const GenreBadge = ({genres}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    return (<div className={ styles.container }>
            { genres && genres.map((genre) => {
                const genreStyle = genre.name
                    .replaceAll(' ', '')
                    .toLowerCase();
                return <Badge onClick={ () => {
                    dispatch(getAllMoviesWithGenres('', genre.id))
                    history.push(`/movies`)
                } } key={ genre.id }
                              className={ styles[genreStyle] }>{ genre.name }</Badge>
            }) }
        </div>
    );
};

