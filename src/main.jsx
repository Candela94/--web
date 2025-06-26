import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import router from './lib/routes.jsx'
import { RouterProvider } from 'react-router'
import { TitleProvider } from './context/TitleContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <TitleProvider>
   <RouterProvider router={router} />
   </TitleProvider>
   </ThemeProvider>
  </StrictMode>,
)
