import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Quote from './Pages/Quote.jsx'
import  './Utlis/i18next.js'
import Work from './Pages/Work.jsx'
import Service from './Pages/Service.jsx'
import Story from './Pages/Story.jsx'
import Contact from './Pages/Contact.jsx'

const router =  createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children :[
      {
        path:'/',
        element : <Home/>
      },
      {
        path:'/quote',
        element : <Quote/>
      },
      {
        path:'/work',
        element : <Work/>
      },
      {
        path:'/service',
        element : <Service/>
      },
      {
        path:'/story',
        element : <Story/>
      },
      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
