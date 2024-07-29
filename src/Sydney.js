import { Link } from "react-router-dom"
import { useState } from "react";
import { dataSydney } from './data/dataSydney';
import { souvenirsSydney } from './data/souvenirsSydney';
import './places.css';


export default function Sydney() {

    const [souvenirs, setSouvenirs] = useState(souvenirsSydney);

    const [slides, setSlides] = useState(0);
    const {image, title, description} = dataSydney[slides];

    const [showText, setShowText] = useState(false);

    const slidePrevious = () => {
        setSlides(slide => {
            slide--;
            if (slide < 0) {
                return dataSydney.length - 1
            }
            return slide
        })
    }

    const slideNext = () => {
        setSlides(slide => {
            slide++;
            if (slide > dataSydney.length - 1) {
                slide = 0
            }
            return slide;
        })
    }

    const deleteItem = (name) => {
        let newGifts = souvenirs.filter(element => element.name !== name)
        setSouvenirs(newGifts)
    }

    return (
        <div>
        <div className="titleContainer SydCont">
            <h1>Sydney</h1>
        </div>
        

        <div className="container verticalCenter boxOne">
            <div className="spaceRight align">
                <div className="container">
                    <p className="bigText">Memorable skyline</p>
                </div>
                <div className="containerFacts">
                    <div className="facts">
                        <p className="bigText">5.3+</p>
                        <p>population (mill.)</p>
                    </div>
                    <div className="facts">
                        <p className="bigText">12.145</p>
                        <p>size (km2)</p>
                    </div>
                    <div className="facts">
                        <p className="bigText">1788</p>
                        <p>established in</p>
                    </div>
                </div> 
                
            </div>
            <div>
                <img className="imgTop" src='https://images.unsplash.com/photo-1530276371031-2511efff9d5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Sydney'/>
            </div>
        </div>


        
        <div className="container highlight">
            <p>Back in 1788, when the first colony was founded at Sydney Cove, the fleet’s commander Captain Arthur Philip wanted to dub it New Albion, but was overruled in favour of naming the region city after Lord Sydney – the wily British home secretary who first came up with the idea of banishing convicts all the way in the Land Down Under.</p>
        </div>

        <div className="boxTwo"> 
            <div className="container lineTitle">
                <h3 className="smallText">Places you may like</h3>
            </div>
            <div className="container">
                <div className="containerButtons">
                    <button className="btn btnPlace" onClick={slidePrevious}>PREVIOUS</button>
                </div>
                <div className="place">
                    <img src={image} alt='Sydney' width='500px'/>
                    <h4><i>{title}</i></h4>
                    <p className="description">
                        {showText ? description + ' ' : description.substring(0, 100) + '... '}
                        <button className="btn" onClick={() => setShowText(!showText)}>{showText ? 'Show less' : 'Show more'}</button>
                    </p>
                </div>
                <div className="containerButtons">
                    <button className="btn btnPlace" onClick={ slideNext }>NEXT</button>
                </div>
            </div>
        </div>


        <div className="boxOne">
            <div className="container lineTitle">
                <h3 className="smallText">Customize your souvenir basket</h3>
            </div>
            <div className="facts">
                <button className="btn btnPlace" onClick={() => setSouvenirs([])}>Delete all</button>
            </div> 
            <div className="containerGifts">
                {souvenirs.map(((item, id) => {
                    const { picture, name, place } = item;
                    return (
                        <div className="gift" key = { id }>
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
                <p>Total souvenirs: { souvenirs.length } 🛒</p>
            </div>
        </div>
        
    
        <div className="highlight">
            <Link className="link" to="/">Home</Link>
        </div>
    </div>

    )
}