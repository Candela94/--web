
import { createBrowserRouter } from "react-router"
import App from "../App"


import Inicio from "../pages/inicio/Inicio"
import StepOne from "../pages/onboarding/StepOne"
import StepTwo from "../pages/onboarding/StepTwo"
import StepThree from "../pages/onboarding/StrepThree"
import StepFour from "../pages/onboarding/StepFour"


const router = createBrowserRouter([{

    path: '/',
    element: <App />,
    children: [

        {
            index: true,
            element:<Inicio />
        },

        {
            path: '/onboarding-1',
            element:<StepOne />
        },


        {
            path: '/onboarding-2',
            element:<StepTwo />
        },



        {
            path: '/onboarding-3',
            element:<StepThree />
        },


        {
            path: '/onboarding-4',
            element:<StepFour />
        },

    ]

    


}])


export default router
