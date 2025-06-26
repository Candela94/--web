import { CardMode } from "../../components/cards/Cards";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import './onboarding.css'


const StepTwo = () => {


    const {setModo, modo} = useTheme()

   

    return (
        <>

            <main className="Main-onboarding2">


                <h1 className="Titulo h1">Elige un modo</h1>

                <CardMode
                 h2='Modo claro'
                    tipo='claro'
                    frase='Ideal para el día a día'
                    selected={modo === 'claro'}
                    onClick={() =>
                        setModo('claro')
                    }


                />



                <CardMode
                    tipo="oscuro"
                    h2="Modo oscuro"
                    frase="Ideal para vistas un poco cansadas"
                    selected={modo === 'oscuro'}
                    onClick={() =>
                        setModo('oscuro')
                    }
                />



            </main>


        </>
    );
}

export default StepTwo;