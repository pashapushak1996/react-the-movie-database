import {Navbar} from "../menu";
import styles from './Header.module.css';
import {UserInfo} from "./user-info/UserInfo";

export const Header = () => {

    return (
        <div className={ styles.header }>
            <Navbar/>
            <UserInfo/>
        </div>
    );
};
