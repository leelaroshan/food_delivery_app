import React, {useState, createContext,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fragment } from 'react';

import './App.css';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Nonvegpizza from './Components/Nonvegpizza';
import Pizza from './Components/Pizza'
import Starters from './Components/Starters';
import Beverages from './Components/Beverages';
import Cart from './Components/Cart';
import Dipping from './Components/Dipping'



export const AppContext =  createContext(null);



export default function App() {
  const [cart, setCart] = useState([]);
  const [showButton, setShowButton] = useState(false);



  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
    };
     

  // show pop up button to top

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);




  return (
  

    <Fragment> 
    
     <Navbar />
     <Header />

     <Container >
      <Row   >

       <Col  style={{textAlign:"right",position:"sticky"}} >

    
      <Sidebar /></Col>


      <Col  xs={6}   style={{borderLeft:"1px solid gray", paddingRight:"20px"}} ><h3>Pizza </h3>

         <AppContext.Provider value={{cart, setCart}}>
         <section id="pizza">
         <Pizza />
         </section>
        <section id="nonvegpizza">
        <Nonvegpizza />
        </section>
        <section id="starters">
        <Starters />
        </section>
        <section id="dippingsauce">
        <Dipping />
        </section>

        <section id="beverges">
        <Beverages />
        </section>
        </AppContext.Provider>

      </Col>


     <Col  style={{textAlign:"left"}}>
        <AppContext.Provider value={{cart, setCart}}>
         <Cart />
        </AppContext.Provider>

      </Col>

     </Row>
  
     </Container>

     {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
     
      </Fragment> 

     
     
    
  );
}


