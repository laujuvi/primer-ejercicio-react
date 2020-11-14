import React, { Component } from 'react';
import './App.css';
import { Boxes } from './box-components/boxes'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="content">
        <Boxes></Boxes>
        </div>

      </div>
    );
  }
}

export default App;