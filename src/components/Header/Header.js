import React, { Component } from 'react';

// Style
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <img src="https://www.relayplatform.com/wp-content/uploads/2020/02/rel-logo.svg" className="relay-logo" alt="Relay Platform"></img>
        </div>
      </header>
    );
  }
}

export default Header;