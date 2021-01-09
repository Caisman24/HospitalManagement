import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../static/menu.css';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import mainLogo from '../../assets/logo.png';
import SignUp from '../../pages/Register';
import SignIn from '../../pages/Login';
import ForgotPassword from '../../pages/ForgotPassword';

class Menu extends Component {
  render() {
    return (
      <Router>
        <nav className="nav-header">
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

          <ul className="navbar-right">
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li className="nav-button">
              <Link to="/register">Signup</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/login" component={SignIn}></Route>
          <Route path="/register" component={SignUp}></Route>
          <Route path="/forgot-password" component={ForgotPassword}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Menu;
