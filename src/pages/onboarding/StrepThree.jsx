

import { ColorCard } from "../../components/cards/ColorCards";
import { useTheme } from "../../context/ThemeContext";
import './onboarding.css'
import { useState } from "react";


const cardsMode = {

    claro: [

        {id:1, name: 'Por defecto', bg:'#B5A897'},
        {id:2, name: 'Gris', bg:'#F1A2E4'},
        {id:3, name: 'Otro color', bg:'#91CFFF'},

    ],

    oscuro: [
    
        {id:1, name: 'Por defecto', bg:'#000000'},
        {id:2, name: 'Gris ocsuro', bg:'#252525'},
        {id:3, name: 'Gris', bg:'#30322F'},
       

    ]


}

const StepThree = () => {

  
    const {modo, setBgColor} = useTheme()
    const cards = cardsMode[modo]

    const [selectedId, setSelectedId] = useState(null);
   



    if (!cards) return <p>Primero selecciona un modo</p>;
    console.log("Cards disponibles:", cards);



    return (



        <>
        <main className="Main-onboarding3">
        <h1 className='h1'>Esto no es todo... elige un Bg color</h1>

        <div className="Cards-colores">
            {
                cards.map((card) => (

                    <ColorCard key={card.id}
                    name={card.name} bg={card.bg}   total={cards.length}
                    selected={selectedId === card.id}
                    onClick={() => {
                        setSelectedId(card.id)
                        setBgColor(card.bg)
                    
                    }}/>
                ))
            }
        </div>
        </main>
        </>




     );
}
 
export default StepThree;