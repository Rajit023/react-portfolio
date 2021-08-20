import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../section-title/Title'
import "./aboutMe.style.css"
import myphoto from '../../../assests/img/mypic.jpg'
export const AboutMe = () => {
    return (
        
            <Container fluid className="about-me">
                <Row className ="pt-5">
                    <Col>
                    <Title title ="About Me" />
                    </Col>
                </Row>
                <Row className ="py-5 my-3">
                    <Col md ="6">
                    
							<img src={myphoto} width="100%" height="100%" alt="about me" />
                    </Col>




                    <Col md ="6">

                        
						<div class="py-4">
							<p>
							My name is ...This project will help your manage your time. Lorem
							ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
							consequatur atque, provident obcaecati modi esse!
							</p>

							<p>
								My name is ...This project will help your manage your time. Lorem
								ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
								consequatur atque, provident obcaecati modi esse!
								</p>

								<p>
									My name is ...This project will help your manage your time. Lorem
									ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
									consequatur atque, provident obcaecati modi esse!
								</p>
						</div>

                    </Col>
                </Row>
            </Container>
        
    )
}
