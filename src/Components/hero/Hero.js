import React from 'react'
import  {Container, Row, Col } from 'react-bootstrap'
import { TopNavbar } from '../header/Navbar'
import './hero.style.css'

import mypic from '../../assests/img/p.png'

export const Hero = () => {
    return (
        <div className="hero">
            <TopNavbar />

            <Container>
                <Row>
                    <Col md="6" className="order-md-2 mt-5">
                       <div className="profile-img">
                    <img src={mypic} width="100%" alt="my" />
                    </div>
                   </Col>


                    <Col md="6" className=" order-md-1">
                    <div class="info mt-5 pt-5">
                    <h1 className="intro fw-bolder">Hi I am <span>Rajit Shyaula</span></h1>

                    <p className="para fw-bold"> 
                        I am fullstack developer
                     </p>
                     </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
    
};

