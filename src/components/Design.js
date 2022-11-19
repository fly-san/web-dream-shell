import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import React, { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Design.css";
import Modal from "react-bootstrap/Modal";
import { DesignImageContext } from "../App";

export function Design(props) {
  const [round, setRound] = useState(0);
  const folder = [
    "Accessories/",
    "Color/",
    "Furniture/",
    "Hardover/",
    "Style/",
  ];
  const picName = ["A.png", "B.png", "C.png"];
  const path = "/Design/";

  const [figureUrl1, setFigureUrl1] = useState("/Design/Accessories/A.png");
  const [figureUrl2, setFigureUrl2] = useState("/Design/Accessories/B.png");
  const [figureUrl3, setFigureUrl3] = useState("/Design/Accessories/C.png");
  const [vote, setVote] = useState([]);
  const [show, setShow] = useState(false);
  const [dreamHouse, setDreamHouse] = useState("A.png");

  const designImageContext = useContext(DesignImageContext);
  const navigate = useNavigate();

  function generatePlan(){
    setShow(false) 
    navigate("/plan")


  }
  function nextRound(index) {
    if (round < 5) {
      index = index.substring(index.length - 5, index.length - 4);
      const temp = vote.concat(index);
      setVote(temp);

      setRound(round + 1);
      setFigureUrl1(path + folder[round] + picName[round % 3]);
      setFigureUrl2(path + folder[round] + picName[(round + 1) % 3]);
      setFigureUrl3(path + folder[round] + picName[(round + 2) % 3]);
    } else {
      var map = new Map();
      map.set("A", 0);
      map.set("B", 0);
      map.set("C", 0);
      var max = 0;
      var key = "A";
      for (var k in vote) {
        var times = map.get(vote[k]) + 1;
        map.set(k, times);
        if (times >= max) {
          max = times;
          key = vote[k];
        }
      }
      setDreamHouse(key + ".png");
      setShow(true);
      designImageContext.setDesignImage(path+dreamHouse);
      // alert("jump to finish with result "+key);
    }
  }

  return (
    <div>
      <Container>
        <h5>What do you want in your dream shell? </h5>
        <p>
          <span>Choose the picture that attracts you!</span>
          <span class="right">Round: {round + 1}</span>
        </p>
        <p></p>
        <Row>
          <Col onClick={() => nextRound(figureUrl1)}>
            <Figure class="brightness">
              <Figure.Image
                width={180}
                height={180}
                src={process.env.PUBLIC_URL + figureUrl1}
              />
            </Figure>
          </Col>

          <Col onClick={() => nextRound(figureUrl2)}>
            <Figure class="brightness">
              <Figure.Image
                width={180}
                height={180}
                src={process.env.PUBLIC_URL + figureUrl2}
              />
            </Figure>
          </Col>

          <Col onClick={() => nextRound(figureUrl3)}>
            <Figure class="brightness">
              <Figure.Image
                width={180}
                height={180}
                src={process.env.PUBLIC_URL + figureUrl3}
              />
            </Figure>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Wow! Here is your Dream Shell !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Figure>
            <Figure.Image src={process.env.PUBLIC_URL + path + dreamHouse} />
          </Figure>
          <div class="right">
            <Button variant="secondary" onClick={generatePlan}>Generate your plan</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Design;
