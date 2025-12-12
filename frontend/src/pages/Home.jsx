import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Crousel from '../component/Crousel'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Crousel />
            <Hero />
        </div>
    )
}

export default Home