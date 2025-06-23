import { NavLink } from "react-router";
import { Button } from "../../components/buttons/Buttons";



const Inicio = () => {


    return (  
        <>
        <h1>INICIO</h1>



       <NavLink to='/onboarding'><Button>Empezar</Button></NavLink> 
        </>
    );

}
 
export default Inicio;