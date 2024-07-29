import { Link } from "react-router-dom"

export default function Main() {

    return (
        <div>
            <p>Welcome. Choose your destination:</p>
            <button><Link to="/melbourne">Melbourne</Link></button>
            <button><Link to="/sydney">Sydney</Link></button>
            <button><Link to="/perth">Perth</Link></button>
            

        </div>
    )
}