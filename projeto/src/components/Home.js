import React, { Component } from 'react';
import TabMan from './TabMan.js';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Bar from'./list.js';
import logo from './img/logo_ung_nova_marca.jpg'

const Styles= {
    rodapePagina: {
	backgroundColor: "#424242",
	color: "#F2FFFC",
	clear: "both",
}


};


injectTapEventPlugin();

class Inicio extends Component {
  render() {
    return (
      <div >
        <MuiThemeProvider  >
          <Bar/>
        </MuiThemeProvider>
        
        <MuiThemeProvider  >
          <TabMan/>  
        </MuiThemeProvider>
        
        <br/>
        
        <footer style={Styles.rodapePagina}><center> <a href="http://www.ung.br"> <img src={logo} role="presentation" alt='logo ung' /></a></center></footer>
      </div>
      

    );
  }
}

export default Inicio;