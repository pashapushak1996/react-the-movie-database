import {MainPage} from "./layouts/MainPage";
import {Header} from "./components/header/Header";
import {UserInfo} from "./components/user-info/UserInfo";
import {Navbar} from "./components/navbar/Navbar";
import {SearchInput} from "./components/search-input/SearchInput";

function App() {
    return (
        <MainPage>
            <Header>
                <Navbar/>
                <SearchInput/>
                <UserInfo/>
            </Header>
        </MainPage>
    );
}

export default App;
