import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import foto from './img/inventorLed.jpg';
import Divider from 'material-ui/Divider';
import nobelImg from './img/NOBEL.jpg';
import bone from './img/bone.jpg';
import tenis from './img/tenis.jpg';
import camisa from './img/camisa.gif';

const styles = {
  sPaper:{
    padding:25,
    textAlign: 'left',
    margin:5,
    height: '95%',
    width: '80%',
    
  },
  titulos: {
	  color:'#B71C1C',
    fontSize:20,
    fontWeight: 'bold',
  },

  corpo:{
    
	  lineHeight: 1,
  }

};

export default class TabsA extends React.Component {

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
          
          tabItemContainerStyle={{ backgroundColor: '#424242'}}
          onChange={this.handleChange}
          value={this.state.slideIndex}
          inkBarStyle={{ backgroundColor: '#B71C1C' }}
          
          
        >
          <Tab label="Historia" value={0} />
          <Tab label="Funcionamneto" value={1} />
          <Tab label="Curiosidades" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div  >
            
            <center>
              <font color='#B71C1C'><h1>História </h1></font>
              <Paper style={styles.sPaper } >
                Você provavelmente já deve conhecer o LED, mas na certa nem dá muito valor para ele. 
                Este componente teve suas primeiras aparições na década de 60 e surpreendeu a todos, 
                porque até então não havia nenhum componente eletrônico que emitisse luz pró-pria. A princípio, 
                o LED teve poucas aplicações, porque ele emitia pouca luz, fator que limitou o componente a função de indicador de energia 
                função que ele executa até hoje em muitos aparelhos eletrônicos.
              </Paper>
          
              <br/>
              <br/>
              <br/>
              <Paper style={styles.sPaper} >

                <font style={styles.titulos}> O Inventor do Led</font>
                <br/><br/>

                Cinquenta anos atrás, o cientista da GE Nick
                Holonyak, à época com 33 anos de idade, inventava o primeiro diodo emissor de luz de espectro
                visível (LED, em inglês), um dispositivo que os colegas da GE na época chamaram de “mágico”
                porque sua luz, diferente dos lasers infravermelhos, era visível ao olho humano.
                <br/>
                <br/>
                <Divider/>
                <br/>
                <br/>
                Quando Holonyak entrou para a GE em 1957, uma equipe de cientistas e engenheiros da GE já
                estava explorando aplicações de semicondutores e criando os chamados tiristores e retificadores,
                precursores dos diodos modernos. Enquanto o cientista da GE Dr. Robert N. Hall trabalhava na
                invenção do laser semicondutor usando GaAs (arsenieto de galio), Holonyak buscava um resultado
                visível utilizando GaAsP (fosfato de arsenieto de galio). Hall utilizou um método de polimento para
                criar espelhos de laser, enquanto Holonyak tentou formar espelhos através de cortes. No dia 9 de
                outubro de 1962, enquanto seus colegas da GE assistiam, Holonyak tornou-se a primeira pessoa a
                operar uma liga de laser semicondutora visível – o dispositivo que iluminou o primeiro LED visível.
                Cinquenta anos depois da invenção de Holonyak, LEDs robustos e de longa duração foram
                incorporados como fonte de luz em inúmeras aplicações, das mais simples até as de missão crítica.
                “Os LEDs estão literalmente em todo lugar”, observa Mary Beth Gotti, gerente da GE Lighting
                Institute, um centro de ensino na sede mundial da GE Iluminação em Nela Park, East Cleveland, Ohio,
                fundado há 100 anos. “Os LEDs estão em dispositivos eletrônicos como botões de elevador, placas
                de saída, celulares e displays de smartphones, TVs, PCs, tablets, sinalizações comerciais, telas de
                vídeo em instalações esportivas, equipamentos cirúrgicos microscópicos e cruzamentos ferroviários.
                Eles também estão sendo utilizados em aplicações de iluminação massivas, como estacionamentos,
                iluminação pública, iluminação de arquitetura e geral, entre outras.”
                Empresas como Starbucks, Walmart, Target e Marriott acreditam no poder da invenção de
                Holonyak. Elas entendem que os LEDs proporcionam valor e não apenas por meio da redução de
                custos com energia. A economia com custos de manutenção é significativa porque os LEDs duram
                mais do que qualquer outra fonte de luz. O valor agregado pelo LED não está restrito aos gigantes
                do varejo que operam em milhares de localidades. Pequenos mercados regionais e outras redes de
                varejo, como Food City e Wawa, estão também adotando essa tecnologia. Uma das aplicações dos 
                sistemas de LED com crescimento rápido – iluminação de estradas e áreas – tem apelo para cidades
                grandes como Las Vegas e pequenas como Superior, no estado de Nebraska, cuja população é de
                2.000 habitantes.
                <br/>
                <br/>
                <Divider/>
                <br/>
                <br/>
               <center><img src={foto}  alt='Nick Holonyak' role="presentation" /></center>
              </Paper>

              <br/>
              <br/>
              <br/>
              <Paper style={styles.sPaper} >
              <font style={styles.titulos}>Referencias</font><br/><br/>
              <a href="http://www.b9.com.br/32100/tech/nick-holonyak-o-inventor-do-led/">/www.b9.com.br</a><br/>
              <a href="https://en.wikipedia.org/wiki/Nick_Holonyak">www.wikipedia.org</a><br/>
              <a href="http://www.gereportsbrasil.com.br/post/95917209014/o-mago-do-led">www.gereportsbrasil.com.br</a><br/>
              <a href="http://www.osram.com.br/osram_br/noticias-e-conhecimento/pagina-de-led/conhecimento-profissional/principios-basicos-do-led/historico-do-led/index.jsp">www.osram.com.br</a>
              </Paper>
            </center>
            
          </div>

          <div >
            <center><font color='#B71C1C'><h1> Como Funciona</h1></font>
            <Paper style={styles.sPaper}>
            O LED é um componente eletrônico semicondutor, ou seja, um diodo emissor de luz  L.E.D  (Light emitter diode ), mesma tecnologia 
            utilizada nos chips dos computadores, que tem a propriedade de transformar energia elétrica em luz. Tal transformação é diferente
             da encontrada nas lâmpadas convensionais que utilizam filamentos metálicos, radiação ultravioleta e descarga de gases, dentre outras. 
             Nos LEDs, a transformação de energia elétrica em luz é feita na matéria, sendo, por isso, chamada de Estado sólido ( Solid State ).
            O LED é um componente do tipo bipolar, ou seja, tem um terminal chamado anodo e outro, chamado catodo. Dependendo de como for polarizado, 
            permite ou não a passagem de corrente elétrica e, consequentemente, a geração ou não de luz.
            </Paper>
            <br/>
            <br/>
            <br/>
            <Paper style={styles.sPaper}>
              <font style={styles.titulos}>Diodo</font><br/><br/>
              Um diodo é o tipo mais simples de semicondutor. De modo geral, um semicondutor é um material com capacidade
              variável de conduzir corrente elétrica. A maioria dos semicondutores é feita de um condutor pobre que teve impurezas 
              (átomos de outro material) adicionadas a ele. O processo de adição de impurezas é chamado de dopagem.
              No caso dos LEDs, o material condutor é normalmente arseneto de alumínio e gálio (AlGaAs). No arseneto de alumínio e 
              gálio puro, todos os átomos se ligam perfeitamente a seus vizinhos, sem deixar elétrons (partículas com carga negativa) livres para 
              conduzir corrente elétrica. No material dopado, átomos adicionais alteram o equilíbrio, adicionando elétrons livres ou criando buracos onde os elétrons 
              podem ir. Qualquer destas adições pode tornar o material um melhor condutor.
              Um semicondutor com elétrons extras é chamado material tipo-N, já que tem partículas extras carregadas negativamente. 
              No material tipo-N, elétrons livres se movem da área carregada negativamente para uma área carregada positivamente.
              Um semicondutor com buracos extras é chamado material tipo-P, já que ele efetivamente tem partículas extras carregadas positivamente.
              Os elétrons podem pular de buraco em buraco, movendo-se de uma área carregada negativamente para uma área carregada positivamente. Como resultado,
              os próprios buracos parecem se mover de uma área carregada positivamente para uma área carregada negativamente.
              Um diodo é composto por uma seção de material tipo-N ligado a uma seção de material tipo-P, com eletrodos em cada extremidade. 
              Essa combinação conduz eletricidade apenas em um sentido. Quando nenhuma voltagem é aplicada ao diodo, os elétrons do material tipo-N preenchem os buracos do 
              material tipo-P ao longo da junção entre as camadas, formando uma zona vazia. Em uma zona vazia, o material semicondutor volta ao seu estado isolante original 
              - todos os buracos estão preenchidos, de modo que não haja elétrons livres ou espaços vazios para elétrons, e assim a carga não pode fluir.
              <br/>
            
              <br/>
              Na junção, elétrons livres do material tipo-N preenchem buracos do material tipo-P. Isto cria uma camada isolante no meio do diodo, chamada de zona vazia.
              Para se livrar da zona vazia, você precisa que elétrons se movam da área tipo-N para a área tipo-P e que buracos se movam no sentido inverso. Para fazer isto, 
              você conecta o lado tipo-N do diodo ao terminal negativo do circuito e o lado tipo-P ao terminal positivo. Os elétrons livres no material tipo-N são repelidos pelo 
              eletrodo negativo e atraídos para o eletrodo positivo. Os buracos no material tipo-P se movem no sentido contrário. Quando a diferença de potencial entre os eletrodos 
              é alta o suficiente, os elétrons na zona vazia são retirados de seus buracos e começam a se mover livremente de novo. A zona vazia desaparece e a carga se move através 
              do diodo.

              Quando o terminal negativo do circuito é preso à camada tipo-N e o terminal positivo é preso à camada tipo-P, elétrons e buracos começam a se mover e 
              a zona vazia desaparece. Se você tentar mover a corrente no sentido oposto, com o lado tipo-P conectado ao terminal negativo do circuito e o lado tipo-N 
              conectado ao pólo positivo, a corrente não fluirá. Os elétrons negativos no material tipo-N são atraídos para o eletrodo positivo. Os buracos positivos no material 
              tipo-P são atraídos para o eletrodo negativo. Nenhuma corrente flui através da junção porque os buracos e os elétrons estão cada um se movendo no sentido errado. 
              A zona vazia então aumenta.
              uando o terminal positivo do circuito está ligado à camada tipo-N e o terminal negativo está ligado à camada tipo-P, elétrons livres são coletados em um terminal
               do diodo e os buracos são coletados em outro. A zona vazia se torna maior. A interação entre elétrons e buracos nesta configuração tem um 
               interessante efeito colateral - ela gera luz. Na próxima seção, descobriremos exatamente o porquê disso.

              <br/>
              <br/>
              <Divider/>
              <br/>
              <br/>
              <font style={styles.titulos}>Como  o diodo gera luz?</font><br/><br/>
              Luz é uma forma de energia que pode ser liberada por um átomo. Ela é feita de uma grande quantidade de pequenos pacotes tipo partículas que têm energia e
              momento, mas nenhuma massa. Estas partículas, chamadas fótons, são as unidades básicas da luz. Os fótons são liberados como um resultado do movimento de 
              elétrons. Em um átomo, os elétrons se movem em orbitais ao redor do núcleo. Elétrons em orbitais diferentes têm quantidades diferentes de energia. De maneira
              geral, os elétrons com mais energia se movem em orbitais mais distantes do núcleo. Para um elétron pular de um orbital mais baixo para um mais alto, algo deve
              aumentar seu nível de energia. Inversamente, um elétron libera energia quando "cai" de um orbital mais alto para um mais baixo. Essa energia é liberada na forma de
              um fóton. Uma grande queda de energia libera um fóton de alta energia, que é caracterizado por uma alta freqüência. Verifique Como funciona a luz para obter uma 
              explicação completa. Como vimos na última seção, elétrons livres se movendo através de um diodo podem cair em buracos de uma camada tipo-P. Isto envolve uma 
              "queda" a partir da banda de condução para um orbital mais baixo, quando então os elétrons liberam energia na forma de fótons. Isso acontece em qualquer
               diodo, mas você pode apenas ver os fótons quando o diodo é composto por um material específico. Por exemplo, os átomos em um diodo de silício padrão são arrumados
                de forma que os elétrons "saltem" uma distância relativamente curta. Como resultado, a freqüência do fóton é tão baixa que é invisível ao olho humano - 
                está na porção infravermelha do espectro de luz. Certamente, isto não é necessariamente algo ruim: LEDs infravermelhos são ideais para controles remotos, 
                entre outras coisas.
            </Paper>
            <br/>
            <br/>
            <br/>
            <Paper style={styles.sPaper}>
            <font style={styles.titulos}>Referencias</font><br/><br/>
            <a href="https://pt.wikipedia.org/wiki/Diodo_emissor_de_luz">www.wikpedia.com</a><br/>
            <a href="http://www.engenhariacivil.com/iluminacao-publica-led-india>www.wikpedia.com">www.engenhariacivil.com</a><br/>
            <a href="http://www.led10.com.br/como-funciona-um-led/">www.led10.com.br</a>



            </Paper>
          </center>

          </div>



          <div >
            
            <center>
            
              <font color="#B71C1C"> <h1>Curiosidades</h1></font>
              <Paper style={styles.sPaper}>

           
                  <font style={styles.titulos}>Tempo de vida</font><br/> <br/>
                  Imagine só, uma lâmpada que pode durar em torno de 20 anos, traz menos danos para o meio ambiente, é muito econômica e produzida com materiais 
                  que podem ser reciclados. Saiba que ela não apenas existe como está a venda no mercado, são os modelos de lâmpadas de LED.
                  As lâmpadas de LED de grandes marcas no mercado já estão sendo consagradas como algumas das melhores em eficiência do mundo. Para que pudesse se aumentar a 
                  eficiência e diminuir todo o consumo de energia, os filamentos de lâmpadas convencionais são trocados por diodos emissores de luz, o que são mais conhecidos 
                  como LEDs. Levando em conta a substituição da vida útil de um produto, ele pode durar em torno de 20 anos, em compensação seu preço é bastante alto.
                  
                  <br/>
                  <br/>
                  <Divider/>
                  <br/>
                  <br/>

                  <font style={styles.titulos}>Vencedores do Nobel</font><br/><br/>
                  A Academia Real de Ciências da Suécia concedeu em 20014 o Prêmio Nobel de Física a Isamu Akasaki, Hiroshi Amano e Shuji Nakamura pela invenção de diodos de luz azul, que, 
                  em última análise, proporcionaram uma fonte econômica de luz branca. Além do amplo reconhecimento de seus trabalhos, eles receberão 8 milhões de coroas suecas 
                  (US$ 1,1 milhão) para dividir.
                  <br/>
                  <center><img src={nobelImg} alt='foto vencedores do nobel' role="presentation"  height='50%'width='50%' /></center>
                  <br/>
                  <br/>
                  <Divider/>
                  <br/>
                  <br/>
                  <font style={styles.titulos}>Moda com led</font><br/> <br/>
                  Sabe aquele tênis de luzinha que você amava na infância? Ele está de volta! 
                  <center>
                  <br/>
                    <img src={camisa} alt='foto camisa led' role="presentation"  height='25%'width='25%' />
                    <img src={tenis} alt='foto tenis led' role="presentation"  height='25%'width='25%' />
                    <img src={bone} alt='foto bone de led' role="presentation"  height='25%'width='25%' />
                  </center>           

            </Paper>


            <br/>
            <br/>
            <br/>
            <Paper style={styles.sPaper} >
              <font style={styles.titulos}>Referencias</font><br/><br/>
              <a href="http://www1.folha.uol.com.br/ciencia/2014/10/1528599-japoneses-inventores-dos-leds-azuis-ganham-o-nobel-de-fisica.shtml">www.folha.uol.com.br</a>
            </Paper>
            


            </center>

          </div>
        </SwipeableViews>
      </div>
    );
  }
}