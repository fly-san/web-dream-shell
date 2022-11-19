import { House } from "react-bootstrap-icons";
import { HouseCard } from "./HouseCard";

import { useEffect, useState } from "react";


export function HouseSearch() {
    //const [isLoading, setIsLoading] = useState(true);
    const data = {
        "houses": [

            {
                "houseId": 101,
                "name": "MAX HOEFE - New building at Superdense 50",
                "address": "Tuerkenstr. 50 80799 Munich",
                "zip": "80799",
                "city": "Munich",
                "type": "appartment",
                "room": 4,
                "bedroom": 2,
                "bathroom": 1,
                "size": 44,
                "tag": ["City Center", "Garden"],
                "price": 955000
            }]
        }
    
    return <div>
        <ul class="mt-5" style={{listStyle : "none"}}>            
            
        </ul>

    </div>
}

export default HouseCard