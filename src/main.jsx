import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import router from './lib/routes.jsx'
import { RouterProvider } from 'react-router'
import { TitleProvider } from './context/TitleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleProvider>
   <RouterProvider router={router} />
   </TitleProvider>
  </StrictMode>,
)
