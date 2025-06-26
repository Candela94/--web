import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {



  const [modo, setModo] = useState(() => localStorage.getItem('modo') || 'claro');
  const [bgColor, setBgColor] = useState(() => localStorage.getItem('bgColor') || null);
  const [headers, setHeaders] = useState(() => localStorage.getItem('headers') || null )





  const temas = {
    claro: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    oscuro: {
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
    },
  };






  // Al cambiar el modo, actualiza color de texto y resetea el fondo personalizado
  useEffect(() => {
    const tema = temas[modo];

    document.body.className = `modo-${modo}`;
    document.documentElement.style.setProperty('--text', tema.color);

  
    setBgColor(null); 

    if (!headers) {
      const defaultHeaderColor = modo === 'oscuro' ? '#ffffff' : '#000000';
      document.documentElement.style.setProperty('--headers', defaultHeaderColor);
    }

    localStorage.setItem('modo', modo);
  }, [modo]);




  // Cambiar el color de fondo
  useEffect(() => {
    const color = bgColor || temas[modo].backgroundColor;

    document.documentElement.style.setProperty('--background', color);


    localStorage.setItem('bgColor', color);


  }, [bgColor, modo]);




  //Cambiar el color de los headers
  useEffect(() => {

    if(!headers) {
      
      document.documentElement.style.setProperty('--headers', headers);
      localStorage.setItem('headers', headers)
    }
  }, [headers])








  return (
    <ThemeContext.Provider value={{ modo, setModo, bgColor, setBgColor, headers, setHeaders }}>
      {children}
    </ThemeContext.Provider>
  );
};




export const useTheme = () => useContext(ThemeContext);
