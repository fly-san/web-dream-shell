import { useContext } from "react";
import Figure from "react-bootstrap/Figure";
import { HouseCard } from "./HouseCard";
import { SingleBankOffer } from "./SingleBankOffer";
import { HouseContext, InterestPlanContext, DesignImageContext } from "../App";
import { Row, Col, Button } from "react-bootstrap";
import "./Design.css"
export function GeneratePlan() {
  const houseContext = useContext(HouseContext);
  const interestPlanContext = useContext(InterestPlanContext);
  const designImageContext = useContext(DesignImageContext);

  return (
    <div>
      <HouseCard house={houseContext.house} />
      <br />
      <br />

      <Row>
        <Col />
        <Col md={4}>
          <SingleBankOffer data={interestPlanContext.interestPlan} />
        </Col>
        <Col />
        <Col md={5}>
          <Figure>
            <Figure.Image
              src={process.env.PUBLIC_URL + designImageContext.designImage}
            />
          </Figure>
        </Col>
        <Col />
      </Row>
      <Button
        class="round"
        variant="dark"
        type="submit"
        onClick={() => {
          window.open('https://www.interhyp.de/ratgeber/');
        }}
        style={{float:"right", margin:"2em"}}
      >
        Consult the experts from Interhyp
      </Button>
    </div>
  );
}
