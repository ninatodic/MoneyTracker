import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';
import Navbar from './components/layout/Navbar';
import EntryState from './context/Entry/EntryState';

const App = () => {
  return (
    <EntryState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </EntryState>
  );
};

export default App;
