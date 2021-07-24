import {Link} from "react-router-dom";
import {StyledDropdownLink, StyledNavbar} from "./NavbarStyles";
import {Logo} from "../../common/Logo";


export const Navbar = () => {
    return (
        <StyledNavbar>
            <Logo/>
            <StyledDropdownLink to={ `/movie` }>
                <span>Movies</span>
                <div className={ `dropdown_menu` }>
                    <div
                        className={ `dropdown_menu_item` }>
                        Popular
                    </div>
                    <div className={ `dropdown_menu_item` }>
                        <Link to={ `/movie/now-playing` }>Now Playing</Link>
                    </div>
                    <div className={ `dropdown_menu_item` }>
                        <Link to={ `/movie/upcoming` }>Upcoming</Link>
                    </div>
                    <div className={ `dropdown_menu_item` }>
                        <Link to={ `/movie/top-rated` }>Top rated</Link>
                    </div>
                </div>
            </StyledDropdownLink>
            <StyledDropdownLink to={ `/tv` }>
                <span>TV Shows</span>
                <div className={ `dropdown_menu` }>
                    <div
                        className={ `dropdown_menu_item` }>
                        Popular
                    </div>
                    <div className={ `dropdown_menu_item` }>
                        <Link to={ `/tv/airing-today` }>Airing today</Link>
                    </div>
                    <div className={ `dropdown_menu_item` }>
                        <Link to={ `/tv/upcoming` }>On TV</Link>
                    </div>
                    <div className={ `dropdown_menu_item` }>
                        <Link to={ `/tv/top-rated` }>Top rated</Link>
                    </div>
                </div>
            </StyledDropdownLink>
            <StyledDropdownLink to={ `/person` }>
                <span>People</span>
                <div className="dropdown_menu">
                    <div className="dropdown_menu_item">
                        Popular People
                    </div>
                </div>
            </StyledDropdownLink>
        </StyledNavbar>
    );
}


