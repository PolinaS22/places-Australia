import { useState } from "react"
import { Link } from "react-router-dom";

const cityBackgrounds = {
    Melbourne: 'MelbCont',
    Sydney: 'SydCont',
    Perth: 'PerthCont'
}
export default function City({ dataCity, dataSouvenirs, dataInfo }) {
    const [souvenirs, setSouvenirs] = useState(dataSouvenirs);
    const [slides, setSlides] = useState(0);
    const {image, title, description} = dataCity[slides];
    const [showText, setShowText] = useState(false);

    const backgroundClass = cityBackgrounds[dataInfo.cityName] || 'default-background';

    const showPrevious = () => {
        setSlides((slide => {
            slide--;
            if (slide < 0){
               return dataCity.length - 1
            }
            return slide
        })
            
        )
    }

    const showNext = () => {
        setSlides((slide => {
            slide ++;
            if (slide > dataCity.length - 1) {
                slide = 0
            }
            return slide
        }))
    }


    const deleteItem = (name) => {
        let itemsRemain = souvenirs.filter(gift => gift.name !== name)
        setSouvenirs(itemsRemain)
        console.log(itemsRemain)
    } 


    return(
        <div>
            <div className={`titleContainer cont-bg-img ${backgroundClass}`}>
                <h1>{ dataInfo.cityName }</h1>
            </div>

            <div className="container verticalCenter boxOne">
            <div className="spaceRight align">
                <div className="container">
                    <p className="bigText">{ dataInfo.headline }</p>
                </div>
                <div className="containerFacts">
                    <div className="facts">
                        <p className="bigText">{ dataInfo.population }</p>
                        <p>population (mill.)</p>
                    </div>
                    <div className="facts">
                        <p className="bigText">{ dataInfo.size }</p>
                        <p>size (km2)</p>
                    </div>
                    <div className="facts">
                        <p className="bigText">{ dataInfo.established }</p>
                        <p>established in</p>
                    </div>
                </div> 
                
            </div>
            <div>
                <img className="imgTop" src={dataInfo.image} alt={dataInfo.cityName}/>
            </div>
        </div>

        <div className="container highlight">
            <p>{ dataInfo.description }</p>
        </div>

        <div className="boxTwo">
            <div className="container lineTitle">
                <h3 className="smallText">Places you may like</h3>
            </div>
            <div className="container">
                <div className="containerButtons">
                    <button className="btn btnPlace" onClick={showPrevious}>PREVIOUS</button>
                </div>
                <div className="place">
                    <img src={image} width='500px' alt='Sigths'/>
                    <h4><i>{title}</i></h4>
                    <p className="description">
                        {showText ? description + ' ' : description.substring(0, 100) + '... '}
                        <button className="btn" onClick={() => { setShowText(!showText)}}>{showText ? 'Show less' : 'Show more' }</button>
                    </p>
                </div>
                <div className="containerButtons">
                    <button className="btn btnPlace" onClick={ showNext }>NEXT</button>
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