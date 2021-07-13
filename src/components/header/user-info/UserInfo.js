import styles from './UserInfo.module.css';
import profileImage from '../../../assets/images/Avatar.jpg'

export const UserInfo = () => {
    return (
        <div className={ styles.avatar }>
            <img src={ profileImage } alt=""/>
            <span>Pavlo Pushak</span>
        </div>
    );
}


