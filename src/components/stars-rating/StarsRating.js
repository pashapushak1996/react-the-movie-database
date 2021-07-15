import React from 'react';
import {Rating} from 'react-simple-star-rating';
import styles from './StarsRating.module.css'

export const StarsRating = ({movieRating}) => {
    return (
        <div className={ styles.rating }>
            <div>Rating { movieRating } of 10 stars</div>
            <Rating stars={ 10 } ratingValue={ movieRating } onClick={ (e) => {
                //Create post request
            } }/>
        </div>
    );
};

