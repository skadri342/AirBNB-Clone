import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {

  const cards = data.map(item => {
    return <Card 

      {...item}
    
      // img={item.coverImg} 
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // country={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
    
    /> 
  })

  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
        {cards}
      </section>
      
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
