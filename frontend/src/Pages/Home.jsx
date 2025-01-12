import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/ImageSlider'
import Features from '../components/Feartures'
import Products from '../components/Products'

function Home() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Features/>
    <Products/>
    </>
  )
}

export default Home