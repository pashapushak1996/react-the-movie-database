import {imageUrlCreator} from "../../utils/helpers";
import {Link} from "react-router-dom";

export const PosterPreview = ({movieId, width, url, imageUrl, movieName}) => {

    const imageSrs = imageUrlCreator(width, imageUrl);

    return (
        url ?
            <Link to={ `${ url }/${ movieId }` }>
                <img src={ imageSrs } alt={ movieName }/>
            </Link>
            : <img src={ imageSrs } alt={ movieName }/>
    );
};
