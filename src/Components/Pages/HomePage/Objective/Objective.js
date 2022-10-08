import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import './objective.css'
const Objective = () => {
    return (
        <section className='mt-5'>
          <center>  <h1>Objectives</h1></center>
             <Row xs={1} md={4} className="g-4  ms-3 mt-5">
     
        <Col>
          <Card className='Card-container'  style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://simmifoundation.org/home/images/objectives/education.jpg" />
      <Card.Body style={{textAlign:'center' }}>
        <Card.Title className='title'  >Education</Card.Title>
        <Card.Text>
        We provide free academic education, scholarship, training and other incentives to the children.
        </Card.Text>
      </Card.Body>
   
      <Card.Body>
       
        <Card.Link className='mt-5' style={{float:"right",textDecoration:"none",fontSize:"1.5rem"}} href="#">Read More </Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='Card-container'  style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://simmifoundation.org/home/images/objectives/livelihood.jpg" />
      <Card.Body style={{textAlign:'center' }}>
        <Card.Title className='title'  >Livelihood</Card.Title>
        <Card.Text>
        We implement various schemes to provide livelihood and uplift the poor in society.
        </Card.Text>
      </Card.Body>
   
      <Card.Body>
       
        <Card.Link className='mt-5' style={{float:"right",textDecoration:"none",fontSize:"1.5rem"}} href="#">Read More </Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='Card-container'  style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://simmifoundation.org/home/images/objectives/healthcare.jpg" />
      <Card.Body style={{textAlign:'center' }}>
        <Card.Title className='title'  >Healthcare</Card.Title>
        <Card.Text>
        We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.
        </Card.Text>
      </Card.Body>
   
      <Card.Body>
       
        <Card.Link className='mt-5' style={{float:"right",textDecoration:"none",fontSize:"1.5rem"}} href="#">Read More </Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='Card-container'  style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://simmifoundation.org/home/images/objectives/women%20empowerment.jpg" />
      <Card.Body style={{textAlign:'center' }}>
        <Card.Title className='title'  >Women and Youth Empowerment</Card.Title>
        <Card.Text>
        We focus on providing equal opportunities for women in the work field.
        </Card.Text>
      </Card.Body>
   
      <Card.Body>
       
        <Card.Link className='mt-5' style={{float:"right",textDecoration:"none",fontSize:"1.5rem"}} href="#">Read More </Card.Link>
      </Card.Body>
    </Card>
        </Col>
     
    </Row>
        </section>
    );
};

export default Objective;