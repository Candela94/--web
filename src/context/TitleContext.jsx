

import { createContext, useContext, useState, useEffect } from "react";


const TitleContext = createContext();


export const TitleProvider = ({children}) => {

    const [title,setTitle] = useState(() => {

        return localStorage.getItem(('customTitle') || '');
    });

    useEffect(() => {
        localStorage.setItem('customTitle', title)
    }, [title])



    return (
        <TitleContext.Provider value={{title, setTitle}}>
            {children}
        </TitleContext.Provider>
    )
}


export const useTitle = () => useContext(TitleContext)