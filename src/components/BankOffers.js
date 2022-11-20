import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { SingleBankOffer } from "./SingleBankOffer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InterestPlanContext } from "../App";
import { MagnifyingGlass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export function BankOffers(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const interestPlanContext = useContext(InterestPlanContext);
  const MARKET_OVERVIEW_URL =
    "https://www.interhyp.de/customer-generation/interest/marketOverview";
  const JSON_BODY = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      caseDto: {
        estate: {
          zip: "80331",
          city: "",
          federalState: "",
        },
        mainApplicant: {
          city: "",
          federalState: "",
          netSalary: 0,
        },
        capital: {
          equityCash: 200000,
        },
        venture: {
          reason: "KaufBest",
          priceBuilding: 600000,
          percentageBroker: 3.57,
          percentageNotary: 0,
          percentageTax: 0,
          shownFunding: {
            equityCash: 200000,
            loans: [
              {
                amount: 421420,
                maturity: 15,
                fullRepayment: false,
                amortisation: 2,
              },
            ],
          },
          brokerCosts: 21419.999999999996,
          notaryCosts: 0,
          transferTax: 0,
        },
        calledBy: "zinscheck18",
      },
      numberOfResults: 3,
    }),
  };

  useEffect(() => {
    try {
      fetch(MARKET_OVERVIEW_URL, JSON_BODY)
        .then((response) => response.json())
        .then((data) => setOffers(data));
    } catch (error) {
      console.log("An error ocurred while fetching offers: " + error);
      // No error handling
    } finally {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#4fa94d"
    />
  ) : (
    <Container>
      <Row className="justify-content-md-center">
        <h4 style={{ textAlign: "center" }}>Select your Loan Offer:</h4>
      </Row>
      <hr />
      <Row className="justify-content-md-center">
        {offers.map((item) => (
          <Col>
            <SingleBankOffer
              key={offers.indexOf(item)}
              bestDeal={offers.indexOf(item) === 0}
              data={item}
              onClick={() => {
                interestPlanContext.setInterestPlan(item);
                navigate("/design");
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BankOffers;
