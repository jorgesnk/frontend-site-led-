import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const Tabela = () => (
  <Table selectable={false}>
    <TableHeader displaySelectAll={false}
        adjustForCheckbox={false}>
        <font color="#B71C1C"><h2>Economias</h2></font>
      <TableRow>
        <TableHeaderColumn><font size={5} color={'#B71C1C'}>Mês</font></TableHeaderColumn>
        <TableHeaderColumn><font size={5} color={'#B71C1C'}>Um Ano</font></TableHeaderColumn>
        <TableHeaderColumn><font size={5} color={'#B71C1C'}>2 Anos</font></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow selectable={false}>
        <TableRowColumn><font size={4}>R$ 50,00</font></TableRowColumn>
        <TableRowColumn><font size={4}>R$ 50,00</font></TableRowColumn>
        <TableRowColumn><font size={4}>R$ 50,00</font></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
export default Tabela;