import './App.css';
import {useEffect, useState} from "react";
import {Header, MoviesList, ThemeButton} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesWithGenres} from "./redux/";
import {GenresContainer} from "./components/";
import {Routes} from "./components/";

function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const dispatch = useDispatch();

    const {currPage, genreId} = useSelector(({paginationReducer, genresReducer}) =>
        ({...paginationReducer, ...genresReducer}));


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


    const toggleTheme = () => {
        isDarkTheme ? setIsDarkTheme(false) : setIsDarkTheme(true);
    }

    return (
        <div className={ isDarkTheme ? 'darkMode' : 'lightMode' }>
            <Header genreId={ genreId }/>
            <ThemeButton isDarkTheme={ isDarkTheme } toggleTheme={ toggleTheme }/>
            <GenresContainer/>
            <Routes/>
        </div>
    );
}

export default App;
