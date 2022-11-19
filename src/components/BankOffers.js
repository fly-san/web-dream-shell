import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { SingleBankOffer } from "./SingleBankOffer";
import Row from 'react-bootstrap/Row';

import { MagnifyingGlass } from 'react-loader-spinner'
import Col from 'react-bootstrap/Col';

export function BankOffers(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
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
      numberOfResults: 4,
    }),
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


  return isLoading ? <MagnifyingGlass
    visible={true}
    height="80"
    width="80"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{}}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor='#c0efff'
    color='#4fa94d'
  /> : (
    
      <Row className="justify-content-md-center">
        {offers.map((item) => (<Col>
          <SingleBankOffer key={offers.indexOf(item)} data={item} />          
        </Col>
        ))}
      </Row>
  
    
  );
}

export default BankOffers;
