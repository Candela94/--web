


import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StrepThree";
import StepFour from "./StepFour";
import { Button } from "../../components/buttons/Buttons";
import { useState } from "react";
import { NavLink } from "react-router";


const Onboarding = () => {

    const [step, setStep] = useState(1)
    const [modo, setModo] = useState(() => localStorage.getItem('modo') || 'claro')


    const renderStep = () => {


        switch (step) {
            case 1: return <StepOne />;
            case 2: return <StepTwo modo={modo} setModo={setModo} />;
            case 3: return <StepThree />;
            case 4: return <StepFour />;

            default: return <StepOne />;
        }
    }


    return (
        <>


            <div className="Onboarding-container">



                <main className="Main">
                    {renderStep()}
                </main>



                <div className="Next-step">

                    {


                        step > 1 && (
                            <Button variant='secondary' onClick={() => setStep((prev) => (1, prev - 1))}>Paso anterior</Button>

                        )}
                    <Button variant='primary' onClick={() => setStep((prev) => Math.min(4, prev + 1))}>{step === 4 ? 'Comenzar' : 'Siguiente paso'}</Button>
                </div>


                <div className="Onboarding-indicators">
                    {
                        [1, 2, 3, 4].map((s) => (

                            <div
                                key={s}
                                className={`indicator-simbol ${step === s ? 'active' : ''}`}></div>
                        ))
                    }
                </div>



            </div>

        </>
    );
}

export default Onboarding;