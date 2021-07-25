import styled from "styled-components";
import {useState} from "react";
import rightIcon from '../../assets/icons/chevronRight.svg'
import downIcon from '../../assets/icons/chevronDown.svg'
import {DropdownButton, DropdownListTitle} from "./SortComponentStyles";


export const SortComponent = ({sortMovie}) => {
    const [value, setValue] = useState('');
    const [isHidden, setIsHidden] = useState(true);

    const handleChange = (e) => {
        const value = e.currentTarget.value;
        setValue(value);
        sortMovie(value);
    };
    return (
        <div>
            <DropdownButton>
                <DropdownListTitle onClick={ () => setIsHidden(prevState => !prevState) }
                                   className={ `dropdown_title` }>
                    <span>Sort</span>
                    <img src={ isHidden ? rightIcon : downIcon } alt=""/>
                </DropdownListTitle>
                <div hidden={ isHidden } className="dropdown_items">
                    <div>Sort Results by</div>
                    <select value={ value } onChange={ handleChange }>
                        <option value={ `Pop Desc` }>Popularity Descending</option>
                        <option value={ `Pop Asc` }>Popularity Ascending</option>
                        <option value={ `Rat Desc` }>Rating Descending</option>
                        <option value={ `Rat Asc` }>Rating Ascending</option>
                        <option value={ `Rel Desc` }>Release Date Descending</option>
                        <option value={ `Rel Asc` }>Release Date Ascending</option>
                        <option value={ `A-Z` }>Title(A-Z)</option>
                        <option value={ `Z-A` }>Title(Z-A)</option>
                    </select>
                </div>
            </DropdownButton>
        </div>
    );
}


