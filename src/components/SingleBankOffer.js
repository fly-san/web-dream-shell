import { Col, Row } from "react-bootstrap";
import { ChevronRight, Circle } from "react-bootstrap-icons";
import "./SingleBankOffer.css";

export function SingleBankOffer(props) {
  const bankName = props.data.bankDetails.bankName;
  const years =
    Math.round(
      10 *
        (props.data.totalDuration.years + props.data.totalDuration.months / 12)
    ) / 10;
  const interestRate = props.data.effectiveInterest;
  const monthlyPayment = props.data.monthlyPayment;
  const loanAmount = props.data.totalPayment;

  // this is the best piece of software ever created:
  const bankLogo =
    "logo_" +
    bankName
      .toLowerCase()
      .replaceAll(" ", "_")
      .replaceAll("ü", "ue")
      .replaceAll("ö", "oe") +
    ".png";
  const bankLogoUrl =
    "https://www.interhyp.de/modules/angular-app-shell/dist/assets/images/brands/" +
    bankLogo;

  return (
    <button
      className={"bank-offer-button" + (props.onClick ? "" : " hover-disable")}
      style={{
        position: "relative",
        width: "20em",
        borderRadius: "8px",
        textAlign: "center",
        border: "3px solid",
        padding: "10px",
        marginBottom: "20px",
        borderColor: props.bestDeal ? "green" : "#eee",
        transitionDuration: "0.75s",
      }}
      onClick={props.onClick}
    >
      {!props.bestDeal ? (
        <></>
      ) : (
        <div className="floating-best-deal">Best deal!</div>
      )}

      <img
        alt={bankName}
        src={bankLogoUrl}
        style={{
          maxHeight: "5em",
        }}
      ></img>
      <h5>{bankName}</h5>
      <hr />
      <Row>
        <Col>
          <h3>{monthlyPayment}€ </h3>
          <h5>Monthly rate</h5>
        </Col>
        <Col>
          <h3>{interestRate}% </h3>
          <h5>Interest rate</h5>
        </Col>
      </Row>
      <hr></hr>
      <h5>{years} Years</h5>
      <hr />

      {!props.onClick ? (
        <></>
      ) : (
        <Row md="auto" className="justify-content-md-center">
          <Col style={{ paddingRight: 0 }}>
            <ChevronRight>Select</ChevronRight>
          </Col>
          <Col style={{ paddingLeft: 2 }}>{"Select"}</Col>
        </Row>
      )}
    </button>
  );
}

export default SingleBankOffer;
