

import { useState } from 'react';
import './cards.css'
import '../../css/App.css'
import { GoSun } from "react-icons/go";

import { LiaMoonSolid } from "react-icons/lia";




export const CardMode = ({ tipo, selected, onClick, frase , h2}) => {

    




    return ( 


        <>


        <div className={`Card Card-${tipo} ${selected ? 'active' : ''}`} onClick={onClick}>

       <div className="Icono">{tipo === 'claro' ? <GoSun  className='Icono-size'/> : <LiaMoonSolid  className='Icono-size'/>
       } </div>

        <div className="Card-texto">
        <h2 className='H2'>{h2}</h2>
        <p className="Frase">{frase}</p>
        </div>





        </div>
        
        
        </>
     );
}