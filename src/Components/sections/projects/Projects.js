import React from 'react'
import {Title} from "../../section-title/Title";
import {Container, Row, Col, } from "react-bootstrap";
import "./projects.style.css"
import task from '../../../assests/img/not-to-do.jpg'
import profile from '../../../assests/img/myp.jpg'
import calculator from '../../../assests/img/calculator.jpg'

export const Projects = () => {
    return <div className="projects-list">
             <Container>
                <Row>
                    <Col>
                    <Title title="Projects" />
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col md="6">
                    <div class="pro-img">
						<img src={task} width="100%" height="100%" alt="" />
					</div>
                    </Col>

               
                    <Col md="6">
                    <div class="fs-2 fw-bold">Not To Do List</div>
                    <div class="fst-italic">Tech: html, css, javascript</div>
								<div class="links"></div>
                                <a href="https://github.com/Rajit023"><i class="fab fa-github-square"></i></a>
                                <a href="">
										<i class="fab fa-chrome"></i>
									</a>
                                    <p>
									<strong> About:</strong> This project will help your manage your
									time. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Deserunt consequatur atque, provident obcaecati modi esse!
								</p>

                    </Col>
                  </Row>


                  <Row>
                     <Col md="6">
                     <div class="fs-2 fw-bold mt-5 p-1">My Portfolio</div>
							<div class="fst-italic">Tech: html, css, javascript</div>
							<div class="links">
								<a href="https://github.com/Rajit023"><i class="fab fa-github-square"></i></a>
								<a href="">
									<i class="fab fa-chrome"></i>
								</a>
							</div>
							<p>
								<strong> About:</strong> This my protfolio web site. time. Lorem
								ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
								consequatur atque, provident obcaecati modi esse!
							</p>
                            </Col> 

                            <Col md="6">
                            <div class="pro-img">
								<img src={profile} width="100%" height="70%" alt="protfolio" />
							</div>
                            </Col>
                  </Row>

                  <Row className="my-5">
                      <Col md="6">
                      <div class="pro-img">
								<img src={calculator} width="100%" height="70%" alt="protfolio" />
							</div>
                      
                      </Col>

                      <Col md="6">
                      <div class="fs-3 fw-bold">Prank calculator</div>
							<div class="fst-italic">Tech: html, css, javascript</div>
							<div class="links">
								<a href="https://github.com/Rajit023"><i class="fab fa-github-square"></i></a>
								<a href="">
									<i class="fab fa-chrome"></i>
								</a>
							</div>
						
							<p class="mt-3">
								<strong> About:</strong> This project will help your manage your
								time. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Deserunt consequatur atque, provident obcaecati modi esse!
							</p>
                          </Col>
                  </Row>
                    </Container>
							
                 


               
                        
            
                    
    </div>                
       
    
};


