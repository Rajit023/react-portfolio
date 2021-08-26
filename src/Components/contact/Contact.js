import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

export const Contact = () => {
    return (
        <div className="contact">
            <Card>
            <ListGroup>
                <h3>Contact Me</h3>
                <ListGroup.Item>
      <a href="https://github.com/Rajit023" target="blank" rel="noreferrer">
      <i class="fab fa-linkedin"></i> <span className="handlers">rajit-shyaula-73a55b215</span></a>
    </ListGroup.Item>

  <ListGroup.Item>
      <a href="https://github.com/Rajit023" target="blank" rel="noreferrer">
    <i className="fab fa-github"></i> <span className="handlers">Rajit023</span></a>
    </ListGroup.Item>
    
  <ListGroup.Item>
      <a href="https://www.facebook.com/rajit.shyaula" target="blank" rel="noreferrer">
      <i class="fab fa-facebook"></i><span className="handlers">rajit.shyaula</span>
      </a></ListGroup.Item>

  
  <ListGroup.Item>
      <a href="https://twitter.com/RajitShyaula"target="blank" rel="noreferrer">
      <i class="fab fa-twitter"></i><span className="handlers">RajitShyaula</span></a>
      </ListGroup.Item>

  <ListGroup.Item>
  <a href="mailto:rshyaula23@gmail.com">
      <i class="fas fa-envelope-square"></i><span className="handlers">rshyaula23@gmail.com</span>
      </a></ListGroup.Item>


  <ListGroup.Item>
      <a href="tel:0450097045">
      <i class="fas fa-phone"></i><span className="handlers">0450097045</span>
</a> </ListGroup.Item>
</ListGroup>
</Card>
        </div>
    
    );
};
