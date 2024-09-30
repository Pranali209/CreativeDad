import { useState } from 'react'

import { useTranslation } from 'react-i18next'
import './App.css'

import Home from './Pages/Home'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'
import FollowCusor from './Component/FollowCusor'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()

  return (
    <>
      <FollowCusor/>
      <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
