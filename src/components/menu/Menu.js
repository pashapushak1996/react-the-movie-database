import {NavLink} from "react-router-dom";
import styles from './Menu.module.css';

export const Menu = ({getAllData}) => {


    return (
        <div>
            <nav className={ styles.menu }>
                <div className={ styles.menu_item }>
                    <NavLink exact to={ `/` }>Home</NavLink>
                </div>
                <div className={ styles.menu_item }>
                    <NavLink onClick={ () => {
                        getAllData(1)
                    } } to={ `/movies` }>Movies</NavLink>
                </div>
            </nav>
        </div>
    );
};


