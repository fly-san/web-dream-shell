import { House } from "react-bootstrap-icons";
import { FaChevronLeft } from "react-icons/fa";
import { HouseCard } from "./HouseCard";
import { BankOffers } from "./BankOffers";

import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import data from "../assets/house.json";
import { HouseContext } from "../App";
import { Container } from "react-bootstrap";

export function HouseSearch() {
  //const [isLoading, setIsLoading] = useState(true);
  const { houseId } = useParams();
  const navigate = useNavigate();
  const houseContext = useContext(HouseContext);

  if (!houseId) {
    return (
      <div>
        {data.houses.map((house) => {
          return (
            <button
              className="pa-5"
              onClick={() => {
                houseContext.setHouse(house);
                navigate("/offers/" + house.houseId);
              }}
              style={{
                minWidth: "100%",
                backgroundColor: "white",
                borderWidth: "0px",
                textAlign: "left",
                right: "0px",
                border: "3px solid",
                padding: "10px",
                borderColor: "white",
              }}
            >
              <HouseCard house={house} />
            </button>
          );
        })}
      </div>
    );
  }

  let house;
  for (const x of data.houses) {
    if (x.houseId == houseId) {
      house = x;
    }
  }

  return (
    <div>
      <HouseCard house={house} />
      <BankOffers />
    </div>
  );
}

export default HouseCard;
