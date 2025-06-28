
import { useTheme } from '../../context/ThemeContext'
import { useState, useEffect } from "react";

const headersColorsByBg = {

  // Fondo blanco roto
  '#F7EFEA': [


    { id: 1, name: 'Naranja', bg: '#E94F50' },

    { id: 2, name: 'Marrón oscuro', bg: '#524943' },

    { id: 3, name: 'Rosa', bg: '#DD93BF' },


  ],




  // Fondo rosa
  '#F8CFE1': [


    { id: 1, name: 'Naranja', bg: '#FC671B' },

    { id: 2, name: 'Rosa', bg: '#C3276D' },

    { id: 3, name: 'Rojo', bg: '#FF3438' },


  ],



  // Fondo morado
  '#7D83F3': [


    { id: 1, name: 'Amarillo', bg: '#FBEC5D' },

    { id: 2, name: 'Rosa palo', bg: '#FF97FD' },

    { id: 3, name: 'Verde', bg: '#9AEF91' },


  ],



}









const StepFour = () => {


  const {bgColor, setHeaders, headers} = useTheme()
  const [selectedId, setSelectedId] = useState(null)

  const cards = headersColorsByBg[bgColor] || []

  const [openMenu, setOpenMenu] = useState(false)





  useEffect(() => {

    const match = cards.find(card => card.bg === headers)
    if(match) setSelectedId(match.id);

  }, [headers, cards])


  const handleOpen = (e) => {
    setOpenMenu(prev => !prev)
  }




  return (

    <>
      <main className="Main-onboarding4">
        <h1 className="h1">Elige un color para los headers</h1>



       

       <div className="Choose-color" onClick={handleOpen}>Elige color</div>

        {

          openMenu && (

            <div className="Colores-container">
        {
          cards.map((card) => (

            <span
            key={card.id}
            className={`Color-header ${selectedId === card.id ? 'selected' : ''}`}
            onClick={() => {
              setSelectedId(card.id);
              setHeaders(card.bg);
            }}
            style={{ backgroundColor: card.bg }}
            title={card.name}
          />


          ))
        }



        </div>


          )
        }
        
      </main>
    </>
  );
}

export default StepFour;