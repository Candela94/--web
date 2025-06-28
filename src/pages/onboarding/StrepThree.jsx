

import { ColorCard } from "../../components/cards/ColorCards";
import { useTheme } from "../../context/ThemeContext";
import './onboarding.css'
import { useState } from "react";


const cardsMode = {

    claro: [

        {id:1, name: 'BG 1', bg:'#F7EFEA'},
        {id:2, name: 'BG 2', bg:'#F8CFE1'},
        {id:3, name: 'BG 3', bg:'#7D83F3'}

    ],

    oscuro: [
    
        {id:1, name: 'BG 1', bg:'#3B2C3B'},
        {id:2, name: 'BG 2', bg:'#212520'},
        {id:3, name: 'BG 3', bg:'#352822'}

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