import {MainPage} from "./layouts/MainPage";
import {Header} from "./components/header/Header";
import {UserInfo} from "./components/user-info/UserInfo";
import {Navbar} from "./components/navbar/Navbar";

function App() {
    return (
        <MainPage>
            <Header>
                <Navbar/>
                <UserInfo/>
            </Header>
        </MainPage>
    );
}

export default App;
