import React, { Component } from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';

import Inicio from './components/Home.js'





class App extends Component {

  render() {
    return (
      <div >
        <MuiThemeProvider  >
        <Inicio/>
        </MuiThemeProvider>
      </div>
      
    );
  }
}

export default App;
