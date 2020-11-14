import React, { Component } from 'react';
import './App.css';
import { BoxDisplay } from './box-components/box-controller/box-display'
import { HeaderTitle } from './header-boxes/header-boxes'
import { Boxes } from './box-components/boxes'
import headerData from './data/box-header-title-data.json'

class App extends Component {
  render() {
    return (

      <div className="App" >
        <div className="content">
        <HeaderTitle headerTitle={headerData.headerTitle}></HeaderTitle>
        <div className="content-grid">
        <Boxes/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;