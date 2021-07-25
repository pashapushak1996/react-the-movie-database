import {StyledMovieListCard} from "./MovieListCardStyles";
import {dateToString, imageUrlCreator} from "../../utils/helpers";
import {Link} from "react-router-dom";

export const MovieListCard = ({movie}) => {
    const posterImage = imageUrlCreator(movie.poster_path, 200);
    const date = dateToString(movie.release_date);
    return (
        <StyledMovieListCard>
            <Link to={ `/movie/${ movie.id }` }>
                <div className={ `card_image` }>
                    <img src={ posterImage } alt=""/>
                </div>
            </Link>
            <div className={ `card_footer` }>
                <h4>{ movie.original_title }</h4>
                <span>{ date }</span>
            </div>
        </StyledMovieListCard>
    );
}


