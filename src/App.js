import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Critique from './components/Critique';
import Tutorial from './components/Tutorial/Tutorial';
import Links from './components/Links';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App" >
        <div className="mainContainer">
          <NavBar/>
          <div className="content">
            <Route path="/website-tutorial/" exact component={Tutorial} />
            <Route path="/website-tutorial/about" exact component={About} />
            <Route path="/website-tutorial/links" exact component={Links} />
            <Route path="/website-tutorial/critique" exact component={Critique} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
