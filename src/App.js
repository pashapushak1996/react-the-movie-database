import './App.css';
import {useEffect, useState} from "react";
import {Header, MovieInfoContainer, MoviesList, ThemeButton} from "./components";
import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesWithGenres} from "./redux/";
import {GenresContainer} from "./components/";

function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const dispatch = useDispatch();

    const {moviesList, currPage, genreId, genreName} =
        useSelector(({paginationReducer, moviesReducer, genresReducer}) =>
            ({...paginationReducer, ...moviesReducer, ...genresReducer}));


    const getAllData = async (currPage, genreId) => {
        dispatch(getAllMoviesWithGenres(currPage, genreId));
    };


    useEffect(() => {
        if (genreId) {
            getAllData(currPage, genreId);
            return;
        }
        getAllData(currPage);
    }, [currPage]);


    const toggleTheme = (isDarkTheme) => {
        isDarkTheme ? setIsDarkTheme(false) : setIsDarkTheme(true);
    }

    return (
        <div className={ isDarkTheme ? 'darkMode' : 'lightMode' }>
            <Header genreId={ genreId }/>
            <ThemeButton isDarkTheme={ isDarkTheme }
                         toggleTheme={ toggleTheme }/>
            <GenresContainer/>
            <Switch>
                <Route path={ `/movies/:id` }
                       render={ (props) =>
                           <MovieInfoContainer { ...props }/>
                       }/>
                <Route path={ `/movies` }
                       render={ (props) =>
                           <MoviesList
                               { ...props }
                               genreName={ genreName }
                               moviesList={ moviesList }/>
                       }/>
            </Switch>
        </div>
    );
}

export default App;
