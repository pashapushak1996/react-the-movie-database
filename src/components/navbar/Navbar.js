import {Link} from "react-router-dom";
import {StyledDropdownMenu, StyledNavbar} from "./NavbarStyles";
import {Logo} from "../../common/Logo";


export const Navbar = () => {
    return (
        <StyledNavbar>
            <Link to={ `/` }>
                <Logo/>
            </Link>
            <StyledDropdownMenu>
                <Link to={ `/movie` }>Movies</Link>
                <div className={ `dropdown_menu` }>
                    <div
                        className={ `dropdown_menu_item` }>
                        <Link to={ `/tv` }> Popular</Link>
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
            </StyledDropdownMenu>
            <StyledDropdownMenu>
                <Link to={ `/tv` }>TV Shows</Link>
                <div className={ `dropdown_menu` }>
                    <div
                        className={ `dropdown_menu_item` }>
                        <Link to={ `/tv` }> Popular</Link>
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
            </StyledDropdownMenu>
            <StyledDropdownMenu>
                <Link to={ `/person` }>People</Link>
                <div className="dropdown_menu">
                    <div className="dropdown_menu_item">
                        <Link to={ `/person` }>Popular People</Link>
                    </div>
                </div>
            </StyledDropdownMenu>
        </StyledNavbar>
    );
}


