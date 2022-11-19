import "./App.css";
import { Nav, Row, Col, Container } from "react-bootstrap";
import { ReactComponent as Snail } from "./assets/snail.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { HouseSearch } from "./components/HouseSearch";
import { LinkContainer } from "react-router-bootstrap";
import { HomePage } from "./components/HomePage";
import { Design } from "./components/Design";
import { createContext, useState } from "react";

export const EquityContext = createContext();
export const HouseContext = createContext();
export const InterestPlanContext = createContext();
export const DesignImageContext = createContext();

function App() {
  const [equity, setEquity] = useState();
  const [house, setHouse] = useState();
  const [interestPlan, setInterestPlan] = useState();
  const [designImage, setDesignImage] = useState();

  return (
    <DesignImageContext.Provider value={{ designImage, setDesignImage }}>
      <EquityContext.Provider value={{ equity, setEquity }}>
        <HouseContext.Provider value={{ house, setHouse }}>
          <InterestPlanContext.Provider
            value={{ interestPlan, setInterestPlan }}
          >
            <Router>
              <Container fluid>
                <Row>
                  <Col xs={2} id="main-navigation-bar">
                    <Row>
                      <Snail id="navigation-bar-icon" />
                      <h2>Dream Shell</h2>
                    </Row>
                    <Nav
                      className="flex-column"
                      variant="pills"
                      defaultActiveKey="/home"
                    >
                      <Nav.Item>
                        <LinkContainer to="/home">
                          <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                      </Nav.Item>
                      <Nav.Item>
                        <LinkContainer to="/offers" hidden={!equity}>
                          <Nav.Link>Offers</Nav.Link>
                        </LinkContainer>
                      </Nav.Item>
                      <Nav.Item>
                        <LinkContainer
                          to="/design"
                          hidden={!house || !interestPlan}
                        >
                          <Nav.Link>Design</Nav.Link>
                        </LinkContainer>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col style={{ padding: 0 }}>
                    <Container fluid id="main-container">
                      <Routes>
                        <Route path="/offers" element={<HouseSearch />}>
                          <Route path=":houseId" element={<HouseSearch />} />
                        </Route>

                        <Route path="/home" element={<HomePage />} />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/design" element={<Design />} />
                      </Routes>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Router>
          </InterestPlanContext.Provider>
        </HouseContext.Provider>
      </EquityContext.Provider>
    </DesignImageContext.Provider>
  );
}

export default App;
