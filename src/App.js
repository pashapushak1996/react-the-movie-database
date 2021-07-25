import {MainContainer} from "./layouts/main-page/MainContainer";
import {Header} from "./components/header/Header";
import {UserInfo} from "./components/user-info/UserInfo";
import {Navbar} from "./components/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/main-page/HomePage";
import {PopularMoviesList} from "./components/movies-list/PopularMoviesList";
import {NowPlayingMoviesList} from "./components/movies-list/NowPlayingMoviesList";
import {UpcomingMoviesList} from "./components/movies-list/UpcomingMoviesList";
import {TopRatedMoviesList} from "./components/movies-list/TopRatedMoviesList";

function App() {
    return (
        <MainContainer>
            <Header>
                <Navbar/>
                <UserInfo/>
            </Header>
            <Switch>
                <Route exact path={ `/` }
                       render={ () => <HomePage/> }/>
                <Route path={ `/movie/now-playing` }
                       render={ (props) =>
                           <NowPlayingMoviesList { ...props }/> }/>
                <Route path={ `/movie/upcoming` }
                       render={ (props) =>
                           <UpcomingMoviesList { ...props }/> }/>
                <Route path={ `/movie/top-rated` }
                       render={ (props) =>
                           <TopRatedMoviesList { ...props }/> }/>
                <Route path={ `/movie` }
                       render={ (props) =>
                           <PopularMoviesList { ...props }/>
                       }/>
            </Switch>
        </MainContainer>
    );
}

export default App;
