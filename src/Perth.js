import { Link } from "react-router-dom";
import { useState } from "react";
import { dataPerth } from './data/dataPerth';
import { souvenirsPerth } from './data/souvenirsPerth';
import './places.css';

export default function Perth() {

    const [souvenirs, setSouvenirs] = useState(souvenirsPerth);

    const [places, setPlaces] = useState(0);
    const {image, title, description} = dataPerth[places];

    const [showText, setShowText] = useState(false);

    const slideBefore = () => {
        setPlaces(place => {
            place--;
            if (place < 0) {
                return dataPerth.length - 1;
            }
            return place;
        })
    }

    const slideNext = () => {
        setPlaces(place => {
            place++;
            if (place > dataPerth.length - 1) {
                place = 0;
            }
            return place
        })
    }

    const deleteItem = (name) => {
        let newGifts = souvenirs.filter(gift => gift.name !== name);
        setSouvenirs(newGifts)
    }

    return(
        <div>
            <div className="titleContainer PerthCont">
                <h1>Perth</h1>
            </div>
            

            <div className="container verticalCenter boxOne">
                <div className="spaceRight align">
                    <div className="container">
                        <p className="bigText">Beautiful nature</p>
                    </div>
                    <div className="containerFacts">
                        <div className="facts">
                            <p className="bigText">2.3+</p>
                            <p>population (mill.)</p>
                        </div>
                        <div className="facts">
                            <p className="bigText">6.417</p>
                            <p>size (km2)</p>
                        </div>
                        <div className="facts">
                            <p className="bigText">1829</p>
                            <p>established in</p>
                        </div>
                    </div> 
                    
                </div>
                <div>
                    <img className="imgTop" src='https://images.unsplash.com/photo-1645723507607-05907a56d3df?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Perth'/>
                </div>
            </div>


            
            <div className="container highlight">
                <p>The land on which Perth lies now was once known as Boorloo. Boorloo formed part of Mooro, the tribal lands of Yellagonga, whose group was one of several who lived around the Swan River, known as the Whadjug. The Whadjug was a part of the greater group of 13 or so dialect groupings which comprised of the south west socio-linguistic block still known today as Noongar (The People).</p>
            </div>

            <div className="boxTwo"> 
                <div className="container lineTitle">
                    <h3 className="smallText">Places you may like</h3>
                </div>
                <div className="container">
                    <div className="containerButtons">
                        <button className="btn btnPlace" onClick={slideBefore}>PREVIOUS</button>
                    </div>
                    <div className="place">
                        <img src={image} width='500px' alt='Perth'/>      
                        <h4><i>{title}</i></h4>  
                        <p className="description">
                            {showText ? description + ' ' : description.substring(0, 100) + '... '}
                            <button className="btn" onClick={() => setShowText(!showText)}>{showText ? 'Show less' : 'Show more'}</button>
                        </p>                
                    </div>
                    <div className="containerButtons">
                        <button className="btn btnPlace" onClick={slideNext}>NEXT</button>
                    </div>
                </div>
            </div>


            <div className="boxOne">
                <div className="container lineTitle">
                    <h3 className="smallText">Customize your souvenir basket</h3>
                </div>
                <div className="containerGifts">
                    {souvenirs.map(((item, id) => {
                        const {picture, name, place} = item;
                        return (
                            <div className="gift" key={ id }>
                                <div>
                                    <img src={picture} alt='gift'/>
                                </div>
                                <div>
                                    <p className="name">{name}</p>
                                </div>
                                <div>
                                    <p>Where? - {place}</p>
                                </div>
                                <div>
                                    <button className="btn btnPlace" onClick={() => deleteItem(name)}>X</button>
                                </div>
                            </div>
                        )
                    }))}

                </div>
                <div className="container">
                    <p>Total souvenirs: {souvenirs.length} 🛒</p>
                </div>
            </div>
            
        
            <div className="highlight">
                <Link className="link" to="/">Home</Link>
            </div>
        </div>

    )
}