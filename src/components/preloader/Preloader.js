import loaderImage from '../../assets/images/LoaderImage.svg';
import styles from './Preloader.module.css';


export const Preloader = () => {
    return (
        <div className={ styles.preloader }>
            <h1>Loading...</h1>
            <img src={ loaderImage } alt=""/>
        </div>
    );
}


