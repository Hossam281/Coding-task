import React from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-full  justify-center '>
    <Navbar/>
    <Content/>
    <Footer/>
    </div>
  )
}

export default Home