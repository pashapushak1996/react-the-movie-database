import {Route, Switch} from "react-router-dom";
import {MovieInfoContainer} from "../movie-info";
import {MoviesListContainer} from "../movies-list";

export const Routes = () => {
    return (
        <Switch>
            <Route path={ `/movies/:id` }
                   render={ (props) =>
                       <MovieInfoContainer { ...props }/>
                   }/>
            <Route path={ `/movies` }
                   render={ (props) =>
                       <MoviesListContainer
                           { ...props }/>
                   }/>
        </Switch>
    );
}


