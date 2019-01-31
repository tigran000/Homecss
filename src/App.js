import React, { Component } from 'react';
import './App.css';
import flogo from './facebook-logo.png'
import glogo from './google.png'

class App extends Component {
  render() {
    return (
      <div className="header">
        <div className='fb'>
          <img src={flogo} alt='fb' />
          <a href="facebook.com">
            Login with Facebook
        </a>
        </div>
        <div className='go'>
          <img src={glogo} alt='go' />
          <a href="google.com">
            Login with Google
        </a>
        </div>
      </div>
    );
  }
}

export default App;
