import React from 'react';
import AppBar from 'material-ui/AppBar';
import logo from './img/logo.png'



const Bar = () => (
  <AppBar style={{backgroundColor:"#B71C1C"}}
  iconElementLeft={ <img src={logo} role="presentation" alt='logo led mais'/>}



  />
);

export default Bar;