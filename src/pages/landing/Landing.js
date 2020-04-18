import React, { Component } from 'react';
//import { Container, Row, Col, Image } from "react-bootstrap";
import Header from '../../uiComponent/Header'
import Footer from '../../uiComponent/Footer'
import Slider from '../../uiComponent/Slider'
import Products from '../../uiComponent/products'
import Contact from '../../uiComponent/contact'

// class Landing extends Component(){
//     render(){
//         return(
//             <Container>

//                 <Header />
//             </Container>
//         )
//     }
// }






// export default Landing;



export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className='header-section'>
          <Header />
          {/* <HeaderSection /> */}
        </div>
        <div>
          <Slider />
        </div>
        <div>
          <Products /> 
        </div>
        <div>
          <Contact/>
          </div>
         <Footer /> 
      </div>
    )
  }
}
