import loaderImage from '../../assets/images/LoaderImage.svg';
import './Preloader.module.css';


export const Preloader = ({theme}) => {
    return (
        <div className={ theme }
             style={ {display: 'flex', justifyContent: "center", alignItems: "center"} }>
            <img src={ loaderImage } alt=""/>
        </div>
    );
}


