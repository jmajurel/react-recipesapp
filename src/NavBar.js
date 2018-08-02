import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  static defaultProps = {
    showForm: () => {}
  }

  render() {
    return (
      <nav className="nav-bar">

	<div className="nav-bar-brand">
	  <a href="">Brandlogo</a>
	</div>

	<ul className="nav-bar-content left">
	  <li className="nav-item">
	    <a href="">Home</a>
	  </li>
	  <li className="nav-item">
	    <a href="">Miams</a>
	  </li>
	  <li className="nav-item">
	    <a href="">Thirty!</a>
	  </li>
	</ul>

	<ul className="nav-bar-content right">
	  <li className="nav-item">
	    <a onClick={this.props.showForm}>New Recipe</a>
	  </li>
	  <li className="nav-item">
	    <a href="">Contact</a>
	  </li>
	  <li className="nav-item">
	    <a href="">Login</a>
	  </li>
	  <li className="nav-item">
	    <a href="">Signin</a>
	  </li>
	</ul>
      </nav>
    );
  }
};

export default NavBar;

