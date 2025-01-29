import React from 'react'
import { Route, Routes } from 'react-router-dom'
import News from '../components/News'
import Navbar from '../components/Navbar'
import HomeLayout from '../Layout/HomeLayout'

const AppRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/news/:id" element={<News />} />
    </Routes>
    </>
  )
}

export default AppRoute