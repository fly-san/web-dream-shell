import { Button, Container } from "react-bootstrap";
import { BiBed } from "react-icons/bi";
import { FaShower, FaDollarSign } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Badge from "react-bootstrap/Badge";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function HouseCard(props) {
  if (!props.house) {
    console.log(":(");
    return <>error</>;
  }
  const houseImage =
    process.env.PUBLIC_URL +
    "/data/house/House Pics/" +
    props.house.houseId +
    ".png";
  const houseTitle = props.house.name;
  const bedrooms = props.house.bedroom;
  const bathrooms = props.house.bathroom;
  const address = props.house.address;
  const price_qm =
    Math.round((100 * props.house.price) / props.house.size) / 100;
  const price_total = props.house.price;

  /*
    position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;*/
  return (
    <Container className="grid grid-flex">
      <Row>
        <Col>
          <img style={{ maxWidth: "500px" }} alt="" src={houseImage}></img>
        </Col>
        <Col id="house-description">
          <Row>
            <h3>{houseTitle}</h3>
          </Row>
          <Row>
            <Col>
              <ul style={{ listStyleType: "none" }}>
                <li id="house-name">
                  <FiMapPin />
                  <p>{address}</p>
                </li>

                <li id="house-rooms">
                  <Row>
                    <Col>
                      <BiBed />

                      <p>{bedrooms}</p>
                    </Col>
                    <Col>
                      <FaShower className=".box" />
                      <p>{bathrooms}</p>
                    </Col>
                    <Col id="pricing">
                      <ul style={{ listStyleType: "none" }}>
                        <li id="house-price-per-qm">
                          <p>
                            €
                            {price_qm
                              .toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                            / qm²
                          </p>
                        </li>
                        <li id="house-price-total">
                          <p>
                            <FaDollarSign />
                            <h3 className="primary">
                              €
                              {price_total
                                .toFixed(2)
                                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                            </h3>
                          </p>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Container>
              <Col>
                <h4>
                  <Badge bg="secondary">Park</Badge>
                </h4>
              </Col>
              <Col>
                <h4>
                  <Badge bg="secondary">Public transport</Badge>
                </h4>
              </Col>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HouseCard;
