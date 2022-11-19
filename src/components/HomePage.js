import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function HomePage(props) {
  return (
    <div>
      <Container>
        <Row>
          {/* left size about house */}
          <Col sm={8}>
            <h4>Tell me more about your dream shell:</h4>
            <Form>
  
              {/* Location */}
              <Form.Group className="mb-3" controlId="location">
                <Form.Label>Where?</Form.Label>
                <Form.Control type="text" placeholder="PLZ or City" />
              </Form.Group>

              {/* Room Numbers */}
              <Form.Label>Room Numbers:</Form.Label>
              <Row>
                <Col >
                  {/* Min Number */}
                  <Form.Group className="mb-3" controlId="roomNumbersMin">
                    <Form.Control type="text" placeholder="Min" />
                  </Form.Group>
                </Col>
                <Col md="auto">to</Col>
                <Col>
                  {/* Max number */}
                  <Form.Group className="mb-3" controlId="roomNumbersMax">
                    <Form.Control type="text" placeholder="Max" />
                  </Form.Group>
                </Col>
              </Row>
                 
              {/* Size */}
              <Form.Label>Size:</Form.Label>
              <Form.Group className="mb-3" controlId="roomSize">
                <Row>
                  <Col><Form.Control type="text" placeholder=""/></Col>
                  <Col>m<sup>2</sup></Col>
                </Row>
              </Form.Group>

              {/* Price */}
              <Form.Label>Total Price:</Form.Label>
              <Form.Group className="mb-3" controlId="prise">
                <Row>
                  <Col>About</Col>
                  <Col><Form.Control type="text" placeholder=""/></Col>
                  <Col>Euro</Col>
                </Row>
              </Form.Group>
        
              {/* Housing Type */}
              <Form.Label>Housing Type:</Form.Label>
              <Form.Group className="mb-3" controlId="houseCheckbox">
                <Form.Check type="checkbox" label="House" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="apartmentCheckbox">
                <Form.Check type="checkbox" label="Apartment" />
              </Form.Group>

            </Form>
          </Col>
          
          <Col sm={4}>
            <h4>About you?</h4>
            <Form>
              {/* ENquity */}
              <Form.Label>Your Saving:</Form.Label>
              <Form.Group className="mb-3" controlId="enquity">
                <Row>
                  <Col><Form.Control type="text" placeholder=""/></Col>
                  <Col>Euro</Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 4, offset: 10 }}>
            <Button variant="dark" type="submit">
              Next Step
            </Button>
          </Col>
        </Row>
      </Container>
    
  </div>
  );
}

export default HomePage;
