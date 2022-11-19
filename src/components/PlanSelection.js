import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HouseCard } from "./HouseCard";
import { BankOffers } from "./BankOffers";

export function PlanSelection(props) {
    return <div class="mt-5" >
        <HouseCard/>
        <hr></hr>
        <BankOffers/>
    </div>
}

export default PlanSelection