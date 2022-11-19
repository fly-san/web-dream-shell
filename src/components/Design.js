import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import React, { useState } from 'react';

export function Design(props) {
  var round = 0;
  const folder =["Accessories/","Color/","Furniture/","Hardover/","Style/"];
  const picName = ["A.png","B.png","C.png"];
  const path = "/Design/"
  // const [figureUrl1, setFigureUrl1] = useState(path+folder[0]+picName[0]);
  const [figureUrl1, setFigureUrl1] = useState("/Design/Accessories/A.png");
  const [figureUrl2, setFigureUrl2] = useState("/Design/Accessories/B.png");
  const [figureUrl3, setFigureUrl3] = useState("/Design/Accessories/C.png");
  
  function nextRound(){
    round = round + 1;
    setFigureUrl1(path+folder[round]+picName[0]);
  }

  return (
    <div>
      <Figure onClick={nextRound}>
      <Figure.Image
        width={180}
        height={180}
        alt="171x180"
        src={process.env.PUBLIC_URL+figureUrl1}
      />
      </Figure>
    </div>
  );
}

export default Design;
