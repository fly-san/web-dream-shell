import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export function Design(props) {
  const round = 0;
  const folder =["Accessories","Color","Furniture","Hardover","Style"];
  const path = "../../data/Design/Accessories"
  
  const nextRound = () => {
    // setFigureUrl("/208.png");
  };
  return (
    <div>
      <Figure onclick="nextRound()">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="../assets/Design/Accessories/A.png"
      />
      </Figure>
    </div>
  );
}

export default Design;
