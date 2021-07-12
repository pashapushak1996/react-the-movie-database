import loaderImage from '../../assets/images/LoaderImage.svg';


export const Preloader = () => {
    return (
        <div style={ {display: 'flex', justifyContent: "center", alignItems: "center"} }>
            <img src={ loaderImage } alt=""/>
        </div>
    );
}


