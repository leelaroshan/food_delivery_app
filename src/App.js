
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Nonvegpizza from './Components/Nonvegpizza';
import Pizza from './Components/Pizza'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Sidebar from './Components/Sidebar';
import {Switch, Route} from 'react-router-dom';
import Starters from './Components/Starters';
import Beverages from './Components/Beverages';
import Cart from './Components/Cart';






function App() {
  return (
    <div className="App">
    
     <Navbar />
     <Header />

     <Container >
    <Row>

    <Col style={{textAlign:"right",position:"sticky"}} >

    
    <Sidebar /></Col>


    <Col xs={6} style={{borderRight:"1px solid gray", paddingRight:"20px"}} ><h3>Pizza </h3>
     {/* <Switch><Route  path="#nonvegpizza"> */}
         {/* </Route><Route  path="#pizza"> */}

         
        <section id="pizza">
         <Pizza />
        </section>
        <section id="nonvegpizza">
        <Nonvegpizza />
        </section>
        <section id="starters">
        <Starters />
        </section>
        <section id="beverges">
        <Beverages />
        </section>


      </Col>


    <Col><Cart /></Col>
   </Row>
  
     </Container>
     
      <Main />

     
    </div>
  );
}

export default App;
