import React, { useEffect, useState } from 'react'
import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import Program from '../../components/Program'
import Testimonials from '../../components/Testimonials '
import Values from '../../components/Values'
import './home.css'

const Home = () => {
   React.useEffect(() => {
     window.scrollTo(0, 0)
   }, [])
  return (
    <>
      <MainHeader />
      <Program />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home
