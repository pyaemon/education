import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from './component/Home.js';
import {About} from './component/About.js';
import {Contact} from './component/Contact.js';
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
      <nav className="sticky-top navbar navbar-expand-md navbar-light bg-light">
          <a href="/home" className="navbar-brand">education</a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav">
                  <a href="/home" className="nav-item nav-link active">Home</a>
                  <a href="/about" className="nav-item nav-link">About</a>
                  <a href="/contact" className="nav-item nav-link">Contact</a>
              </div>
          </div>
      </nav>

        
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;
