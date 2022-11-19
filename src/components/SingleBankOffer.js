import { Card, Button } from "react-bootstrap";

export function SingleBankOffer(props) {
  const bankName = props.data.bankDetails.bankName;
  const years =
    Math.round(
      10 *
        (props.data.totalDuration.years + props.data.totalDuration.months / 12)
    ) / 10;
  const interestRate = props.data.effectiveInterest;
  const monthlyPayment = props.data.monthlyPayment;
  // interest rate, repayment rate, monthly payment, expected loan balance?, loan fully repaid
  return (
    <Card>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{bankName}</Card.Title>
        <Card.Text>
          <ul>
            <li>Interest rate: {interestRate}</li>
            <li>Years: {years}</li>
            <li>Monthly payment: {monthlyPayment}</li>
          </ul>
        </Card.Text>
        <Button variant="primary" href="">
          {bankName}
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default SingleBankOffer;
