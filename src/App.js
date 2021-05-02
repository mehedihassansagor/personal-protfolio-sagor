import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import FakeData from './components/FakeData/FakeData';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/skills">
            <FakeData />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/bLOGS">
            <Blogs />
          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
