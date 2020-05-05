import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="product-header">
        <Logo />
      </header>
    );
  }
}

export default Header;
