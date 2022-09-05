import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import dataElements from './data'

function App() {

  const data = dataElements.map(properties => {
    return <Card 
    
      img={properties.coverImg} 
      rating={properties.stats.rating}
      reviewCount={properties.stats.reviewCount}
      country={properties.location}
      title={properties.title}
      price={properties.price}/> 
  })

  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      {data}
      
      {/* <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"  
      /> */}
    </div>    
  )
}

export default App
