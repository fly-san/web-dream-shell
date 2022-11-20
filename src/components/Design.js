import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import React, { useContext, useState } from 'react';
import "./Design.css"
import Modal from 'react-bootstrap/Modal';
import { motion } from "framer-motion"
import { DesignImageContext,HouseContext } from "../App";
import { useNavigate } from "react-router-dom";
import {HouseCard} from  "./HouseCard"


export function Design(props) {
  const houseContext = useContext(HouseContext);
  const [round,setRound]= useState(1);
  const folder =["Accessories/","Color/","Furniture/","Hardover/","Style/"];
  const picName = ["A.png","B.png","C.png"];
  const path = "/Design/"
  
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
      setRound(round+1);
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
      designImageContext.setDesignImage(path+dreamHouse);
      setShow(true);
      
    }
  }
  

  return (
    <div>
      <HouseCard house={houseContext.house} />
      <hr/>
      <Container>
        <h5 class="whatTitle">What do you want in your dream shell? </h5>
        <p></p>
        <p>
          <span class="choose">Choose the picture that attracts you!</span>
          <span class="round ">Round: {round}</span>
        </p>

        <p></p>
        <p></p>
        <Row>
          <Col onClick={() => nextRound(figureUrl1)}>
          <motion.img
           width="70%"
           style={{"border-radius": "5px"}}
           whileHover={{ 
            scale: 1.1,
            boxShadow: "10px 10px 0 rgba(247,220,111,0.667)",
           }}
           whileTap={{ 
            scale: 0.9 }}
            src={process.env.PUBLIC_URL+figureUrl1}
          />
          </Col>
            
          <Col onClick={() => nextRound(figureUrl2)}>
          <motion.img
           width="70%"
           style={{"border-radius": "5px"}}
           whileHover={{ 
            scale: 1.1,
            boxShadow: "10px 10px 0 rgba(247,220,111,0.667)",
           }}
           whileTap={{ 
            scale: 0.9 }}
            src={process.env.PUBLIC_URL+figureUrl2}
          />
          </Col>

          <Col onClick={() => nextRound(figureUrl3)}>
          <motion.img
           width="70%"
           style={{"border-radius": "5px"}}
           whileHover={{ 
            scale: 1.1,
            boxShadow: "10px 10px 0 rgba(247,220,111,0.667)",
           }}
           whileTap={{ 
            scale: 0.9 }}
            src={process.env.PUBLIC_URL+figureUrl3}
          />
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
