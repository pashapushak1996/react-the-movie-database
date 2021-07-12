import styles from './ThemeButton.module.css';

export const ThemeButton = ({toggleTheme}) => {
    return (
        <div className={ styles.button }>
            <div
                onClick={ () => {
                    toggleTheme();
                } }>
                <i className="fas fa-cloud-moon"></i>
            </div>

        </div>
    );
};

