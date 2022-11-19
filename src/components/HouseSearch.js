import { House } from "react-bootstrap-icons";
import { FaChevronLeft } from 'react-icons/fa'
import { HouseCard } from "./HouseCard";
import { BankOffers } from "./BankOffers";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap"
import data from "../assets/house.json"

export function HouseSearch() {
    //const [isLoading, setIsLoading] = useState(true);
    const { houseId } = useParams();
    const navigate = useNavigate();

    if (!houseId) {
        
        return <div>
            {data.houses.map((house) => {
                console.log(house.houseId);
                return <button class="pa-5" onClick={() => { navigate("/offers/"+house.houseId); console.log(house.houseId) }} style={{
                    minWidth: "100%", backgroundColor: "white", borderWidth: "0px", textAlign: "left",
                    right: "0px", padding: "10px"
                }}><HouseCard house={house} /></button>
            })}
        </div>
    }


    let house;
    for (const x of data.houses) {
        if (x.houseId == houseId) {
            house = x;
        }
    }
    if (!house) { return <>Error</> }

    return <div>
        <button class="pa-5" onClick={() => { navigate("/offers"); console.log(house.houseId) }} style={{
            backgroundColor: "white", borderWidth: "0px"
        }}>
            <FaChevronLeft/>
        </button>
        <HouseCard house={house} /> 
        <hr></hr>
        <Container>
            <BankOffers/>

        </Container>
        </div>
}

export default HouseCard