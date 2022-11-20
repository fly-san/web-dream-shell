import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { EquityContext } from "../App";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./HomePage.css"
import ParticlesBg from 'particles-bg'

export function HomePage(props) {
  const equityContext = useContext(EquityContext);
  const navigate = useNavigate();
  
  
  

  return (
    <div>
      <h1 class="slogen">East or West,</h1>
      <h3 class="slogen">Home is the best!</h3>
      <p></p>

      <Row>
        <Col>
          <Card border="dark" style={{ width: '30rem' }}>
            <Card.Header>Your personal information</Card.Header>
            <Card.Body>         
              <Form>
                {/* ENquity */}
                <Form.Label>Your Savings:</Form.Label>
                <Form.Group className="mb-3" controlId="equity">
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(value) => equityContext.setEquity(value)}
                      />
                    </Col>
                    <Col>Euro</Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md="auto">
          <Card border="dark" style={{ width: '35em' }}>
            <Card.Header>Tell me more about your dream shell</Card.Header>
            <Card.Body>
              {/* left size about house */}
              <p></p>
              <Form>          
                  {/* Location */}
                  <Form.Group as={Row} className="mb-3" controlId="location">
                    <Form.Label column sm={3}>Where?</Form.Label>
                    <Col sm={5}><Form.Control type="text" placeholder="Zip or City" /></Col>
                  </Form.Group>
                  <p></p>
                  {/* Room Numbers */}             
                  <Row>
                  <p></p>
                    <Col md="auto"><Form.Label>Room Numbers:</Form.Label></Col>
                    <Col sm={3}>
                      {/* Min Number */}
                      <Form.Group className="mb-3" controlId="roomNumbersMin">
                        <Form.Control type="text" placeholder="Min" />
                      </Form.Group>
                    </Col>
                    <Col md="auto">to</Col>
                    <Col sm={3}>
                      {/* Max number */}
                      <Form.Group className="mb-3" controlId="roomNumbersMax">
                        <Form.Control type="text" placeholder="Max" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <p></p>
                  {/* Size */}
                  <Row>
                    <Col md="auto"><Form.Label>Size:</Form.Label></Col>
                    <Col sm={5}>
                      <Form.Group className="mb-3" controlId="roomSize">
                        <Row>
                          <Col>
                            <Form.Control type="text" placeholder="" />
                          </Col>
                          <Col>
                            m<sup>2</sup>
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                  </Row>
                  <p></p>
                  {/* Price */}
                  <Row>
                    <Col md="auto">
                      <Form.Label>Total Price: About</Form.Label>
                    </Col>
                    
                    <Col sm={3}>
                      <Form.Group className="mb-3" controlId="prise">
                            <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </Col>
                    <Col>Euro</Col>   
                  </Row>  

                  <p></p>
                  
                  {/* Housing Type */}
                  <Row>
                    <Col md="auto"><Form.Label>Housing Type:</Form.Label></Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="houseCheckbox">
                        <Form.Check type="checkbox" label="House" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="apartmentCheckbox">
                        <Form.Check type="checkbox" label="Apartment" />
                      </Form.Group>
                    </Col>
                  </Row>            
              </Form>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
   
      <p></p>
      <p></p>
      <Button
        variant="light"
        type="submit"
        onClick={() => {
          navigate("/offers");
        }}
        style={{float:"right", margin:"2em"}}
      >
        Next Step
      </Button>
      <ParticlesBg color="#f0ffff" type="cobweb" bg={true} />    
      
    </div>
  );
}

export default HomePage;
