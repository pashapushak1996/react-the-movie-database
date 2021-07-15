import {Navbar} from "../navbar";
import styles from './Header.module.css';
import {UserInfo} from "./user-info/UserInfo";

export const Header = ({genreId}) => {

    return (
        <div className={ styles.header }>
            <Navbar genreId={ genreId }/>
            <UserInfo/>
        </div>
    );
};
