
import './header.css'
import { useTitle } from '../../context/TitleContext';
import { useContext } from 'react';

export const Header = () => {


    const {title} = useTitle()


    return ( 
        <>

        <header className="Header">
            <nav className="Header-nav">
                <ul className="Header-ul">
                    <li className="Header-li Header-nav">CONTACTO</li>
                    <li className="Header-li Header-logo">"{title || ''}"</li>
                    <li className="Header-li Header-nav">PROYECTOS</li>
                </ul>
            </nav>

        </header>
        
        </>
     );
}