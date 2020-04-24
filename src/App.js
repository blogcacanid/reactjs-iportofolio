import React,{Component} from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portofolio from './components/Portofolio';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
        return(
            <Router>
                <Sidebar />
                <Home />
                <About />
                <Resume />
                <Portofolio />
                <Services />
                <Contact />
            </Router>
        )
    }
}

export default App;
