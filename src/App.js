import './App.css';
import {useEffect, useState} from "react";
import {Header, MovieInfo, MoviesList, ThemeButton} from "./components";
import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesWithGenres} from "./redux/reducers/movies-reducer";
import {Preloader} from "./components/preloader/Preloader";

//todo Зробити
// isLoading загрузку,
// пагінацію,
// додати фільтри фільмів,
// сторінку Home і нормально застилізувати
// redux thunk

function App() {

    const dispatch = useDispatch();

    const {moviesList, currPage, isLoading} = useSelector((
        {paginationReducer, moviesReducer}) => ({...paginationReducer, ...moviesReducer}));

    const [theme, setTheme] = useState('light-mode');


    const getAllData = async (currPage, value) => {
        dispatch(getAllMoviesWithGenres(currPage, value));
    }


    useEffect(() => {
        getAllData(currPage);

    }, [currPage]);


    const toggleTheme = () => theme === 'light-mode' ? setTheme('dark-mode') : setTheme('light-mode');

    if (isLoading) {
        return <Preloader theme={ theme }/>
    }

    return (
        <div className={ theme }>
            <ThemeButton toggleTheme={ toggleTheme }/>
            <Header/>
            <Switch>
                <Route path={ `/movies/:id` } render={ (props) => <MovieInfo { ...props }/> }/>
                <Route path={ `/movies` }
                       render={ (props) => <MoviesList { ...props } moviesList={ moviesList }/>
                       }/>
            </Switch>
        </div>
    );
}

export default App;
