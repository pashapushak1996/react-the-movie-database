import SearchField from 'react-search-field';
import {useState} from "react";

export const SearchInput = () => {
    const [value, setValue] = useState();
    const onChange = (e) => {
        setValue(e);
    }
    const onClick = () => {
        console.log(value);
    }

    return (
        <SearchField onSearchClick={ onClick } onChange={ onChange }/>
    );
}


