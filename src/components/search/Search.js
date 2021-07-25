import {MainSearchBlock, SearchBlockForm, SearchBlockTitle} from "./SearchStyles";
import bgImage from '../../assets/images/bgSearch.jpg'

export const Search = () => {
    return (
        <MainSearchBlock
            bgImage={ bgImage }>
            <SearchBlockTitle>
                <h1>Welcome.</h1>
                <div>Millions of movies, TV Shows and people to discover. Explore now.</div>
            </SearchBlockTitle>
            <SearchBlockForm>
                <input type="text" placeholder={`Search for a movie, tv shows, person...`}/>
                <button>Search</button>
            </SearchBlockForm>
        </MainSearchBlock>
    );
}


