import { Link } from "react-router-dom";
import './places.css'


export default function Main() {

    return (
        <div className="bodyMain">
            <div className="titleMain">
                <p>Welcome. Choose your destination:</p>
            </div>


           <div className='containerMain'>
                <div className="btnDestination btnMelb">
                    <Link className="linkMain" to="/melbourne">Melbourne</Link>
                </div>
                <div className="btnDestination btnSyd">
                    <Link className="linkMain" to="/sydney">Sydney</Link>
                </div>
                <div className="btnDestination btnPer">
                    <Link className="linkMain" to="/perth">Perth</Link>
                </div>
           </div>



        </div>
    )
}