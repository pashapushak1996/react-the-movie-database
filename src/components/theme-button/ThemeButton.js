import styles from './ThemeButton.module.css';

export const ThemeButton = ({toggleTheme, isDarkTheme}) => {

    return (
        <div className={ styles.button }>
            <div onClick={ () => {
                toggleTheme(isDarkTheme);
            } }>
                <i className="fas fa-cloud-moon">{ isDarkTheme ? "Day" : "Night" }</i>
            </div>

        </div>
    );
};

