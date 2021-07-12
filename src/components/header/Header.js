import {Menu} from "../menu";
import styles from './Header.module.css';

export const Header = ({getAllData}) => {
    return (
        <div className={ styles.header }>
            <Menu getAllData={ getAllData }/>
        </div>
    );
};
