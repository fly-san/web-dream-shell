import { House } from "react-bootstrap-icons";
import { HouseCard } from "./HouseCard";

export function HouseSearch() {
    
    return <div>
        <ul class="mt-5" style={{listStyle : "none"}}>
        <li>
            <HouseCard/>
            <hr></hr>
        </li>
        <li>
            <HouseCard />
            <hr></hr>
        </li>
        <li>
            <HouseCard />
            <hr></hr>
        </li>
        <li>
            <HouseCard />
            <hr></hr>
        </li>
        <li>
            <HouseCard />
            <hr></hr>
        </li>
    </ul>

    </div>
}

export default HouseCard