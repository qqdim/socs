import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav"
import Profile from "./Components/Content/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

const App = () => {
    return (<div className="app-wrapper">
        appjs

        <Router>
            <Header/>
            <Nav/>
            <Routes>
                <Route path='/dialogs' element={<Dialogs/>}/>
                <Route path='/' element={<Profile/>}/>
                <Route path='/mus' element={<Music/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/set' element={<Settings/>}/>
            </Routes>
        </Router>
    </div>);
}


export default App;
