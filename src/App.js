import React, { Component } from 'react';
import './App.css';
import FilmReleaseBox from './Containers/FilmReleaseBox.js'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Test content</h1>
        <FilmReleaseBox />
      </div>
    );
  }
}

export default App;
