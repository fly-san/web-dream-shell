import "./App.css";
import { Nav, Row, Col } from "react-bootstrap";
import { ReactComponent as Snail } from "./assets/snail.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { BankOffers } from "./components/BankOffers";
import { LinkContainer } from "react-router-bootstrap";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <Router>
      <Col>
        <Row xs="auto" className="align-items-center" id="main-navigation-bar">
          <Col>
            <Snail id="navigation-bar-icon" />
          </Col>
          <Col>
            <h2>Dream Shell</h2>
          </Col>
          <Col>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <LinkContainer to="/home">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/offers">
                  <Nav.Link>Offers</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row style={{ padding: 16 }}>
          <Routes>
            <Route path="/offers" element={<BankOffers />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </Row>
      </Col>
    </Router>
  );
}

export default App;
