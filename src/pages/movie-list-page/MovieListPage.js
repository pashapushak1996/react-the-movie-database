import {ListContainer} from "../../layouts/list-container/ListContainer";


export const MovieListPage = ({children}) => {

    return (
        <ListContainer>
            <div>
                This is to
            </div>
            <div>
                { children }
            </div>
        </ListContainer>
    );
}
