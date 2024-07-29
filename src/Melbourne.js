import { Link } from "react-router-dom";
import { useState } from "react";
import { dataMelbourne } from "./data/dataMelbourne";
import { souvenirsMelbourne } from "./data/souvenirsMelbourne"
import './places.css'






export default function Melbourne() {

    const [souvenirs, setSouvenirs] = useState(souvenirsMelbourne);

    const [slides, setSlides] = useState(0);
    const {image, title, description} = dataMelbourne[slides];
    
    const [showText, setShowText] = useState(false);

    const previousSlide = () => {
        setSlides((slide => {
            slide--;
            if (slide < 0) {
                return dataMelbourne.length - 1
            }
            return slide
        }))
    }

    const nextSlide = () => {
        setSlides((slide => {
            slide ++;
            if (slide > dataMelbourne.length - 1){
                slide = 0
            }
            return slide
        }))
    }

    const deleteItem = (name) => {
        let itemsRemain = souvenirs.filter(gift => gift.name !== name)
        setSouvenirs(itemsRemain)
    } 

    return (
        <div>
            <div className="titleContainer MelbCont">
                <h1>Melbourne</h1>
            </div>
            

            <div className="container verticalCenter boxOne">
                <div className="spaceRight align">
                    <div className="container">
                        <p className="bigText">Awesome city</p>
                    </div>
                    <div className="containerFacts">
                        <div className="facts">
                            <p className="bigText">5+</p>
                            <p>population (mill.)</p>
                        </div>
                        <div className="facts">
                            <p className="bigText">9.992</p>
                            <p>size (km2)</p>
                        </div>
                        <div className="facts">
                            <p className="bigText">1835</p>
                            <p>established in</p>
                        </div>
                    </div> 
                    
                </div>
                <div>
                    <img className="imgTop" src='https://images.unsplash.com/photo-1583032586422-4a31c5386d9f?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Melbourne'/>
                </div>
            </div>


            
            <div className="container highlight">
                <p>Melbourne has a very strong coffee culture that goes back to the 19th century. In the 1880s, there was a social change when people started preferring coffee over alcohol. Some also believe that the coffee culture got even stronger after World War II when a large population of Italians started migrating to Melbourne.</p>
            </div>

            <div className="boxTwo"> 
                <div className="container lineTitle">
                    <h3 className="smallText">Places you may like</h3>
                </div>
                <div className="container">
                    <div className="containerButtons">
                        <button className="btn btnPlace" onClick={previousSlide}>PREVIOUS</button>
                    </div>
                    <div className="place">
                        <img src={image} alt='Melbourne' width='500px'/>
                        <h4><i>{title}</i></h4>
                        <p className="description">
                         {showText ? description + ' ' : description.substring(0, 100) + '... '} 
                         <button className="btn" onClick={() => setShowText(!showText)}>{showText ? 'Show less' : 'Show more'}</button>
                        </p>
                    </div>
                    <div className="containerButtons">
                        <button className="btn btnPlace" onClick={nextSlide}>NEXT</button>
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
                                    <img src={picture} alt='gift' width='250px'/>
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
                    <p>Total souvenirs: {souvenirs.length } 🛒</p>
                </div>
            </div>
            
        
            <div className="highlight">
                <Link className="link" to="/">Home</Link>
            </div>
        </div>
    )
}