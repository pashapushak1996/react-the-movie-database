import {GenreBadge} from "../genre-badge";
import styles from './Genres.module.css';

export const Genres = ({genres}) => {

    return (
        <div className={ styles.container }>
            <GenreBadge genres={ genres }/>
        </div>
    );
}


