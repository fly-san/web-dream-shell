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
import { GeneratePlan } from "./components/Plan";

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
              <div id="root-container">
                <div id="main-navigation-bar">
                  <Snail id="navigation-bar-icon" />
                  <h2>Dream Shell</h2>
                  <p style={{ fontSize: "small" }}>
                    East or West - Home is the best!
                  </p>
                  <Nav
                    className="flex-column"
                    variant="pills"
                    activeKey={window.location.pathname.split("/")[1]}
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
                    <Nav.Item>
                      <LinkContainer to="/plan" hidden={!designImage}>
                        <Nav.Link>Plan</Nav.Link>
                      </LinkContainer>
                    </Nav.Item>
                  </Nav>
                </div>
                <div id="content-container">
                  <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/offers" element={<HouseSearch />}>
                      <Route path=":houseId" element={<HouseSearch />} />
                    </Route>
                    <Route path="/plan" element={<GeneratePlan />} />
                    <Route path="/design" element={<Design />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                  </Routes>
                </div>
              </div>
            </Router>
          </InterestPlanContext.Provider>
        </HouseContext.Provider>
      </EquityContext.Provider>
    </DesignImageContext.Provider>
  );
}

export default App;
