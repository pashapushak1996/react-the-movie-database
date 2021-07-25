import {MainPage} from "./layouts/MainPage";
import {Header} from "./components/header/Header";
import {UserInfo} from "./components/user-info/UserInfo";
import {Navbar} from "./components/navbar/Navbar";
import {SearchInput} from "./components/search-input/SearchInput";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "./redux/reducers/moviesReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch]);

    const {movies} = useSelector(({movies}) => movies);

    return (
        <MainPage>
            <Header>
                <Navbar/>
                <SearchInput/>
                <UserInfo/>
            </Header>
        </MainPage>
    );
}

export default App;
