import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css';

export const Navbar = () => {

    return (
        <div>
            <nav className={ styles.menu }>
                <div className={ styles.menu_item }>
                    <NavLink to={ `/movies` }>Movies</NavLink>
                </div>
            </nav>
        </div>
    );
};


