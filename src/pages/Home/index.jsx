import React from 'react'

import Banner from '../../Components/Banner'
import About from '../../Components/About'
import Services from '../../Components/Services'
import Specialists from '../../Components/Specialists'
import Slider from '../../Components/Slider'

const Home = () => {
  return (
    <>
      <Banner/>
      <About/>
      <Services/>
      <Specialists/>
      <Slider/>
    </>
  )
}

export default Home