import { Button, Container } from "react-bootstrap";
// import { BiBed } from "react-icons/bi";
import { FaShower,FaBed, FaFlipboard} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HouseCard.css"
import Stack from 'react-bootstrap/Stack';

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
  const size = props.house.size;
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
        <Col  md="auto">
          <img style={{ maxWidth: "400px" }} alt="" src={houseImage}></img>
        </Col>
        <Col lg="7" id="house-description">
          <Row>
            <h3>{houseTitle}</h3>
          </Row>
          <Row>
            <p class="detailText"><FiMapPin/>{address}</p>
            <Stack direction="horizontal" gap={2}>
              <Row className="ms-auto">
                <Col> 
                    <FaBed size={20}/>
                    <div class="roomDetail">{bedrooms}</div>
                </Col>
                <Col>
                  <FaShower size={20} />
                  <div class="roomDetail">{bathrooms} </div>
                </Col>
                <Col>
                  <FaFlipboard size={20} />
                  <div class="roomDetail">{size}m²</div>
                </Col>
              </Row>
              <div className="vr tag" />
              <Row  className="ms-auto">
                <p class="unitPrice">
                  €{price_qm
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}/m²
                </p>
                <p class="roomDetail">
                  €{price_total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </p>
              </Row>
            </Stack>
          </Row>
          <p></p>
          <Row>
            <Col>
              {props.house.tag.map((tag) => {
                return (
                    <Badge bg="light" text="dark" class="tag" >{tag}</Badge>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HouseCard;
