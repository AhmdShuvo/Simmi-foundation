import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Help = () => {
    return (
        <div style={{backgroundImage:"url(https://simmifoundation.org/home/images/help-bg.png)",backgroundRepeat:'no-repeat',height:"100%", backgroundSize: "cover",   backgroundPosition:" center center"}}>
            <center><h1 className='text-light'>How You can help Us? </h1></center>

            <Container>
            <Row xs={1} md={3} className="g-4 my-5 py-5">
   
        <Col>
          <Card className='bg-transparent'  style={{ width: '18rem',padding:'40px',textAlign:'center' }}>
            <Card.Body>
              <Card.Title className='title'>Collaborate</Card.Title>
              <Card.Text className='text-light'>
              Simmi Foundation serves in the collaboration with schools, colleges and other institutions.
              </Card.Text>
            </Card.Body>

           <h5 className='text-light' > Collaborate with us</h5>
          </Card>
        </Col>
        <Col>
          <Card className='bg-transparent'  style={{ width: '18rem',padding:'40px',textAlign:'center' }}>
            <Card.Body>
              <Card.Title className='title'>Collaborate</Card.Title>
              <Card.Text className='text-light'>
              Simmi Foundation serves in the collaboration with schools, colleges and other institutions.
              </Card.Text>
            </Card.Body>

           <h5 className='text-light' > Collaborate with us</h5>
          </Card>
        </Col>
        <Col>
          <Card className='bg-transparent'  style={{ width: '18rem',padding:'40px',textAlign:'center' }}>
            <Card.Body>
              <Card.Title className='title'>Collaborate</Card.Title>
              <Card.Text className='text-light'>
              Simmi Foundation serves in the collaboration with schools, colleges and other institutions.
              </Card.Text>
            </Card.Body>

           <h5 className='text-light' > Collaborate with us</h5>
          </Card>
        </Col>
     
    </Row>
            </Container>

        </div>
    );
};

export default Help;