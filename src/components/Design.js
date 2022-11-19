import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import React, { useState } from 'react';
import "./Design.css"

export function Design(props) {
  const [round,setRound]= useState(0);
  const folder =["Accessories/","Color/","Furniture/","Hardover/","Style/"];
  const picName = ["A.png","B.png","C.png"];
  const path = "/Design/"
  // const [figureUrl1, setFigureUrl1] = useState(path+folder[0]+picName[0]);
  const [figureUrl1, setFigureUrl1] = useState("/Design/Accessories/A.png");
  const [figureUrl2, setFigureUrl2] = useState("/Design/Accessories/B.png");
  const [figureUrl3, setFigureUrl3] = useState("/Design/Accessories/C.png");
  const [vote,setVote] = useState([]);


  function nextRound(index){
    if(round<5){
      index = index.substring(index.length-5,index.length-4);
      const temp = vote.concat(index);
      setVote(temp);

      setRound(round+1);
      setFigureUrl1(path+folder[round]+picName[round%3]);
      setFigureUrl2(path+folder[round]+picName[(round+1)%3]);
      setFigureUrl3(path+folder[round]+picName[(round+2)%3]);
    }
    else{
      var map = new Map();
      map.set("A",0);
      map.set("B",0);
      map.set("C",0);
      var max = 0;
      var key = "A";
      for (var k in vote){
          var times = map.get(vote[k])+1;
          map.set(k,times);
          if(times>=max){
            max = times;
            key = vote[k];
          };
      }
      alert("jump to finish with result "+key);
    }
    
  }

  return (
    <Container >
      <h5>What do you want in your dream shell? </h5>
      <p>
        <span>Choose the picture that attracts you!</span>
        <span class="round">Round: {round+1}</span>
      </p>
      <p></p>
      <Row>
        <Col onClick={() => nextRound(figureUrl1)}>
        <Figure class="brightness" >
        <Figure.Image
          width={180}
          height={180}
          src={process.env.PUBLIC_URL+figureUrl1}
        />
        </Figure>
        </Col>
       
        <Col onClick={() => nextRound(figureUrl2)}>
        <Figure class="brightness">
        <Figure.Image
          width={180}
          height={180}
          src={process.env.PUBLIC_URL+figureUrl2}
        />
        </Figure>
        </Col>

        <Col onClick={() => nextRound(figureUrl3)}>
        <Figure class="brightness">
        <Figure.Image
          width={180}
          height={180}
          src={process.env.PUBLIC_URL+figureUrl3}
        />
        </Figure>
        </Col>
      </Row>
    </Container>
      
    
  );
}

export default Design;
