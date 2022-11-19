import { useContext } from "react";
import Figure from "react-bootstrap/Figure";
import {HouseCard} from  "./HouseCard"
import {SingleBankOffer} from "./SingleBankOffer"
import { HouseContext, InterestPlanContext, DesignImageContext } from "../App";
import { Row, Col } from "react-bootstrap";



export function GeneratePlan() {
    const houseContext = useContext(HouseContext);
    const interestPlanContext = useContext(InterestPlanContext);
    const designImageContext = useContext(DesignImageContext);
    
    return <div>
        <HouseCard house={houseContext.house} />
        <hr></hr>
        

        <Row>
            <Col>
            <SingleBankOffer data={interestPlanContext.interestPlan}/> 
            </Col>

            <Col>
            <Figure>
            <Figure.Image src={process.env.PUBLIC_URL + designImageContext.designImage} />
            </Figure>   
            </Col>
        </Row>

        
        </div>
}

