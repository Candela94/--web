

import './buttons.css'


export const Button = ({ type = 'button', onClick, variant, children, className }) => {

    const btnClass = () => {

        switch(variant){
            case 'primary' : return 'Btn-primary';
            case 'secondary' : return 'Btn-secondary';
            case 'non-style' : 'Btn-nonStyle';
            case 'danger' : return 'Btn-danger';

            default: return 'Btn-primary'
        }
    }



    return (

        <>


            <button
                type={type}
                onClick={onClick}
                className={`Button ${btnClass()}`}>


                {children}</button>



        </>
    );


}