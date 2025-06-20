
import './onboarding.css'

import { useEffect, useRef, useState } from "react";
import { Header } from "../../components/header/Header";
import { Button } from '../../components/buttons/Buttons';
import { FaRegCircleCheck } from "react-icons/fa6";


import { useTitle } from "../../context/TitleContext";



const StepOne = () => {


    const [inputText, setInputText] = useState('')
    const [showNotificacion, setShowNotificacion] = useState(false)

    const [fadeOut, setFadeOut] = useState(false)

    const [showNext, setShowNext] = useState(false)
    


    const { title, setTitle } = useTitle()



    useEffect(() => {
        localStorage.removeItem('customTitle');
        setTitle("")
    }, [])



    const handleSubmit = () => {


        if (inputText.trim() !== '') {
            setTitle(inputText)
            setInputText('')
            setShowNotificacion(true)
            setShowNext(true)
            setFadeOut(false)



            setTimeout(() => {
                setFadeOut(true); 
                setTimeout(() => setShowNotificacion(false), 500); 
              }, 2500);


        }

    }



    const handleDelete = () => {

        setInputText('')
        setTitle('')
    }


    return (
        <>


            <div className="Body-onboarding">
                {/* <Header /> */}
                <main className="Main">


                    <section className="Main-introduccion">


                        <h1 className="Main-titulo">"{inputText || title}"
                        </h1>



                        <div className="Input-botones">

                        <input type="text" className="Main-input"
                            placeholder='Pulsa para escribir'
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)} />



                        <div className="Botones">

                            <Button variant='secondary' onClick={handleDelete}>Borrar título</Button>
                            <Button variant='secondary' onClick={handleSubmit} type='submit'>Guardar título</Button>
                        </div>



                        {
                            showNotificacion && (
                                <div className={`Notificacion ${fadeOut ?  'fade-out' : ''}`}>
                                    <p className="Mensaje">Tu título ha sido guardado</p>
                                    <FaRegCircleCheck />

                                </div>
                            )

                        }


                        {
                            showNext && (
                                <div className="Next-step">
                                    <Button variant='primary'>Siguiente paso</Button>
                                </div>
                            )
                        }
                        </div>

                    </section>


                </main>
            </div>


        </>
    );
}

export default StepOne;