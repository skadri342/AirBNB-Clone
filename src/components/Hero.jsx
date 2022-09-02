import React from 'react'
import image from '../images/photo-grid.png'

export default function Hero() {
    return (
        <section className='hero'>
            <img src={image} className="hero--image"/>
            <h1>Online Experiences</h1>
            <p className='description'>Join unique interactive activities led by one-of-a-kind 
                hosts-all without leaving home.
            </p>
        </section>
    )
}