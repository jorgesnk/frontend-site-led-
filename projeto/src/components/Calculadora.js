import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
const style = {
  marginLeft: 20,
};

const DivCalculadora = () => (
  <Paper zDepth={2}
    style={{width:300}}>
      <font color={"#B71C1C"}><h1>Dados de Consumo</h1></font>
      <TextField hintText="Quantidade de Lampadas" style={style} underlineShow={false} />
      <Divider />
      <TextField hintText="watts das lampadas atuais" style={style} underlineShow={false} />
      <Divider />
      <FlatButton label="Calcular" backgroundColor={'#B71C1C'}  />
      <Divider/>
  </Paper>

  
);

export default DivCalculadora;
