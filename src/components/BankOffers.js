import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { SingleBankOffer } from "./SingleBankOffer";

export function BankOffers() {
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
      numberOfResults: 5,
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

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Container>
      {offers.map((item) => (
        <SingleBankOffer key={offers.indexOf(item)} data={item} />
      ))}
    </Container>
  );
}

export default BankOffers;
