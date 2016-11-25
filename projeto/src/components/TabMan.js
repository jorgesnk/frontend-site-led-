import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TabsA from './Tabs.js'
import DivCalculadora from './Calculadora.js';
import Tabela from './Tabela.js';
import Paper from 'material-ui/Paper';
import imgReact from './img/react.png';
import imgNode from './img/node.jpg';
import imgJava from './img/java.png';
import imgJorge from './img/jorge.jpg';
import imgjoao from './img/joao.jpg';
import imgGuilherme from './img/guilherme.jpg';
import imgGit from './img/git.png';
const styles = {
  sPaper:{
    padding:5,
   textAlign: 'left',
    margin:1,
    height: '95%',
    width: '80%',
    display: 'inline-block',
  },
  titulo: {
	  color:'#B71C1C',
    fontSize:20,
    fontWeight: 'bold',
  },

  CirculoPaper:{

    padding:55,
    textAlign: 'left',
    margin:25,
    height: '25%',
    width: '25%',
    display: 'inline-block',

  },

  fotoPaper:{

    padding:10,
    textAlign: 'center',
    margin:25,
    height: '25%',
    width: '25%',
    display: 'inline-block',
    backgroundColor:"#ECEFF1",
    fontWeight: 'bold',

  },

 

};

export default class TabMan extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div >
        <Tabs 
         
          tabItemContainerStyle={{ backgroundColor: '#B71C1C'}}
          onChange={this.handleChange}
          value={this.state.slideIndex}
          inkBarStyle={{ backgroundColor: '#B71C1C' }}
          
          
        >
          <Tab label="Home" value={0} />
          <Tab label="Calculadora" value={1} />
          <Tab label="Contatos" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div >
            <TabsA/>
          </div>

          <div>
            <center>
              <DivCalculadora/>
            </center>    
            <Tabela/>
          </div>
          
          <div>
          
            <center><font color="#B71C1C"><h1>Informações do Projeto</h1></font></center>
            <center>
              <Paper style={styles.sPaper}>
                
                <font style={styles.titulo}>Tecnologias </font><br/>
                <center>
                  <Paper style={styles.CirculoPaper} zDepth={2} circle={true} >
                    <a href="https://www.java.com/pt_BR/"><img src={imgJava}  alt='link e imagem do java' role="presentation"  height='100%'width='100%'  /></a>
                  </Paper>

                  <Paper style={styles.CirculoPaper} zDepth={2} circle={true} >
                    <a href="https://facebook.github.io/react/"><img src={imgReact}  alt='link e logo do react' role="presentation"  height='100%'width='100%'  /></a>
                  </Paper>

                  <Paper style={styles.CirculoPaper} zDepth={2} circle={true} >
                    <a href="https://nodejs.org/en/"><img src={imgNode}  alt='link e logo do node' role="presentation"  height='100%'width='100%'  /></a>
                </Paper>
                </center>
              </Paper>
              <br/>
              <br/>
              <br/>
              <Paper style={styles.sPaper}>

                <font style={styles.titulo}>Equipe </font><br/><br/>

                <center>
                  <Paper style={styles.fotoPaper} zDepth={2} >

                    <img src={imgJorge} alt='Foto de jorge Nakassima' role="presentation"  height='100%'width='100%' /><br/>
                    Jorge Nakassima <br/>
                    Email:jorgesilveiranakassima@hotmail.com

                  </Paper>

                  <Paper style={styles.fotoPaper} zDepth={2} >
                    <img src={imgjoao} alt='Foto de João Pedro ' role="presentation"  height='100%'width='100%' /><br/>
                    João Pedro Brito Peres <br/>
                    Email:45646554654
                  </Paper>
                  
                <Paper style={styles.fotoPaper} zDepth={2} >
                    <img src={imgGuilherme} alt='Foto de Guilherme Rabello' role="presentation"  height='100%'width='100%' /><br/>
                    Guilherme Rabello <br/>
                    Email:45646554654
                </Paper>
                <br/>
                <Paper style={styles.CirculoPaper} zDepth={2} circle={true} >
                    <a href="https://nodejs.org/en/"><img src={imgGit}  alt='link e logo do node' role="presentation"  height='100%'width='100%'  /></a><br/>
                    <center>Git Hub</center>
                </Paper>

            

              </center>
            </Paper>

            


            </center>  
          </div>
        </SwipeableViews>
      </div>
    );
  }
}