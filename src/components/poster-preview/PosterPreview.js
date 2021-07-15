import {imageUrlCreator} from "../../utils/helpers";
import {Link} from "react-router-dom";


export const PosterPreview = ({movieId, width, url, imageUrl, movieName}) => {

    const imageSrs = imageUrlCreator(imageUrl, width);

    return (
        url ?
            <Link to={ `${ url }/${ movieId }` }>
                <img src={ imageSrs } alt={ movieName }/>
            </Link>
            : <img src={ imageSrs } alt={ movieName }/>
    );
};
