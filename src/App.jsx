import React, { Component } from 'react';
import './App.css';
import {BoxDisplay}  from './box-components/box-controller/box-display'

class App extends Component {
  render() {
    return (
      <div className="App" >
<BoxDisplay></BoxDisplay>
      </div>
    );
  }
}

export default App;