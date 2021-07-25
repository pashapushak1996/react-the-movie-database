import {MovieListCard} from "../movie-list-card/MovieListCard";
import {StyledMovieList} from "./MovieListStyles";
import {ListPageContainer} from "../../layouts/list-container/ListContainer";
import {SortComponent} from "../sort-component/SortComponent";
import {useDispatch} from "react-redux";
import {setMovies} from "../../redux/reducers/moviesReducer";
import {dateToSortValue} from "../../utils/helpers";

export const MoviesList = ({movies}) => {
    const dispatch = useDispatch();

    const sortMovies = (sortBy) => {
        switch (sortBy) {
            case `Pop Desc`: {
                const sort = movies.sort((a, b) => b.popularity - a.popularity);
                dispatch(setMovies(sort));
                break;
            }
            case `Pop Asc`: {
                const sort = movies.sort((a, b) => a.popularity - b.popularity);
                dispatch(setMovies(sort));
                break;
            }
            case `Rat Desc`: {
                const sort = movies.sort((a, b) => b.vote_average - a.vote_average);
                dispatch(setMovies(sort));
                break;
            }
            case `Rat Asc`: {
                const sort = movies.sort((a, b) => a.vote_average - b.vote_average);
                dispatch(setMovies(sort));
                break;
            }
            case `Rel Desc`: {
                const sort = movies.sort((a, b) => {
                    return dateToSortValue(b.release_date) - dateToSortValue(a.release_date);
                });
                dispatch(setMovies(sort));
                break;
            }
            case `Rel Asc`: {
                const sort = movies.sort((a, b) => {
                    return dateToSortValue(a.release_date) - dateToSortValue(b.release_date);
                });
                dispatch(setMovies(sort));
                break;
            }
            case `A-Z`: {
                const sort = movies.sort((a, b) => a.title.localeCompare(b.title));
                dispatch(setMovies(sort));
                break;
            }
            case `Z-A`: {
                const sort = movies.sort((a, b) => b.title.localeCompare(a.title));
                dispatch(setMovies(sort));
                break;
            }
            default :
                return
        }
    }

    return (
        <ListPageContainer>
            <SortComponent sortMovie={ sortMovies }/>
            <StyledMovieList>
                { movies.map((movie) => <MovieListCard key={ movie.id } movie={ movie }/>) }
            </StyledMovieList>
        </ListPageContainer>
    );
}


