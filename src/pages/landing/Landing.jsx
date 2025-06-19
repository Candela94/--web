import './landing.css'
import '../../css/App.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { Header } from '../../components/header/Header';

import { useTitle } from '../../context/TitleContext';

const frases = [
  "tu título ha sido guardado",
  "pero esto es algo que soy", 
  "esto es algo que soy"
];

const Landing = () => {




  const [id, setId] = useState(0)
  const [showFrases, setShowFrases] = useState(false)
  const [inputText, setInputText ] = useState('')
  const intervalRef = useRef(null)


const {title, setTitle} = useTitle()



  useEffect(() => {
    localStorage.removeItem('customTitle');
    setTitle("")
  }, [])


  const handleShow = () => {
    setShowFrases(prev => !prev)
  }



  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setId((prev) => (prev + 1) % frases.length)
    }, 3000)
  }




  const stopInterval = () => {
    clearInterval(intervalRef.current)
  }






  useEffect(() => {
    if (showFrases) {
      startInterval()
    } else {
      stopInterval()
    }
    return () => stopInterval()
  }, [showFrases])






  const handleSubmit = () => {
   
      
    if(inputText.trim() !== '') {
      setTitle(inputText)
      setShowFrases(true)
      setInputText('')
    }
       
  }


 


  return (
    
    <div className="Body-landing">
    <Header />
      <main className="Main">
        <section className="Main-introduccion">
          <h1 className="Main-titulo">"{title || ''}
            {

                !showFrases && <span className='cursor'></span>
              
            }"</h1>

          {
            !showFrases && (
              <div className='Main-inputContainer'>
              
              <input type="text" className="Main-input" 
              placeholder='Pulsa para escribir'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}/>
              <button className="Main-button" onClick={handleSubmit}>Enviar</button>
              </div>
            )
          }




          {showFrases && (


            <div className="Main-contenedor" onMouseEnter={stopInterval} onMouseLeave={startInterval}>
              <div className="Main-frases" style={{ transform: `translateY(-${id * 1.1}em)` }}>
                {frases.map((fr, i) => (
                  <p key={i} className="Main-subtitulo" onClick={handleShow}>{fr}</p>
                ))}
              </div>
            </div>


          )}
        </section>
      </main>
      </div>
   
  );
}

export default Landing;