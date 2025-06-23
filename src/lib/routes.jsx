
import { createBrowserRouter } from "react-router"
import App from "../App"


import Inicio from "../pages/inicio/Inicio"
import Onboarding from "../pages/onboarding/Onboarding"


const router = createBrowserRouter([{

    path: '/',
    element: <App />,
    children: [

        {
            index: true,
            element:<Inicio />
        },

        {
            path: '/onboarding',
            element:<Onboarding />
        },


      
    ]

    


}])


export default router
