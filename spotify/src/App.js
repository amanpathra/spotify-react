import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Controls from './components/Controls';
import Store from './context/Store';

function App() {
    return (
        <Store>
            <Router>
                <div className='App'>
                    <Nav />
                    <section className="hero">
                        <NavBar />
                        <Main />
                    </section>
                    <Controls />
                </div>
            </Router>
        </Store>
    );
}

export default App;