import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { SingleBankOffer } from "./SingleBankOffer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InterestPlanContext } from "../App";
import { useNavigate } from "react-router-dom";

import { MagnifyingGlass } from "react-loader-spinner";

export function BankOffers(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const interestPlanContext = useContext(InterestPlanContext);
  const MARKET_OVERVIEW_URL =
    "https://www.interhyp.de/customer-generation/interest/marketOverview";
  const navigate = useNavigate()

  const broker_percentage = 3.57;
  const price = 600000;

  const broker_costs = price * broker_percentage / 100
  const equity = 100000;
  const amount = price - equity
  const json = {
    caseDto: {
      estate: {
        zip: "80331",
        city: "Muenchen",
        federalState: "BY",
      },
      mainApplicant: {
        city: "",
        federalState: "",
        netSalary: 0,
      },
      capital: {
        equityCash: equity,
      },
      venture: {
        reason: "KaufBest",
        priceBuilding: price,
        percentageBroker: broker_percentage,
        percentageNotary: 0,
        percentageTax: 0,
        shownFunding: {
          equityCash: equity,
          loans: [
            {
              amount: amount,
              maturity: 15,
              fullRepayment: false,
              amortisation: 2,
            },
          ],
        },
        brokerCosts: broker_costs,
        notaryCosts: 0,
        transferTax: 0,
      },
      calledBy: "zinscheck18",
    },
    numberOfResults: 4,
  }
  const JSON_BODY = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  };

  useEffect(() => {
    try {
      fetch(MARKET_OVERVIEW_URL, JSON_BODY)
        .then((response) => response.json())
        .then((data) => setOffers(data));
    } catch (error) {
      console.log(error);
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
      <Row className="px-4 justify-content-md-center">
      {offers.map((item) => (
        <Col>
          <button
            style={{
              minWidth: "100%",
              backgroundColor: "white",
              borderWidth: "0px",
              borderRadius: "8px",
              textAlign: "left",
              right: "0px",
              border: "3px solid",
              padding: "10px",
              borderColor: "#eee"
            }}
            onClick={() => {
              interestPlanContext.setInterestPlan(item);
              navigate("/design");
            }}
          >
          <SingleBankOffer key={offers.indexOf(item)} data={item} />
          </button>
        </Col>
      ))}
    </Row>
  );
}

export default BankOffers;
