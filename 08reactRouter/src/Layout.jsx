import React from 'react'
import Header from './componants/header/Header'
import Footer from './componants/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout