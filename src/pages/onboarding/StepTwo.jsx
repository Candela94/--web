import { CardMode } from "../../components/cards/Cards";
import { useEffect, useState } from "react";


const StepTwo = ({modo, setModo}) => {

   

    useEffect(() => {
        localStorage.setItem('modo', modo)
        document.body.classList.toggle('dark-mode' , modo ==='oscuro')
        
    },[modo])

    return (
        <>

            <main className="Main-onboarding2">


                <h1 className="Titulo">Elige un modo</h1>

                <CardMode
                 h2='Modo claro'
                    tipo='claro'
                    frase='Ideal para el día a día'
                    seleccionado={modo === 'claro'}
                    onClick={() => setModo('claro')}


                />



                <CardMode
                    tipo="oscuro"
                    h2="Modo oscuro"
                    frase="Ideal para vistas un poco cansadas"
                    seleccionado={modo === 'oscuro'}
                    onClick={() => setModo('oscuro')}
                />



            </main>


        </>
    );
}

export default StepTwo;