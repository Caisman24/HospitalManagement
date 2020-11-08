import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../static/menu.css';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import mainLogo from '../../assets/logo.png';

class Menu extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="/">
            <img src={mainLogo} alt="LOGO"></img>
          </Link>

          <ul className="navbar-default">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Menu;
