
import './css/App.css'
import { Outlet } from 'react-router'


import { useEffect } from 'react'
import { useTheme } from './context/ThemeContext'


function App() {

  const {bgColor} = useTheme()

  useEffect(() => {
    document.documentElement.style.setProperty('--background', bgColor);
  }, [bgColor]);


  return (

    <>

     <Outlet />
     
    </>
  )
}

export default App
