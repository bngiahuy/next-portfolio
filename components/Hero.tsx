import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight fill='white' className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' />
        <Spotlight fill='blue' className='top-10 left-full h-[80vh] w-[50vw]' />
        <Spotlight fill='red' className='top-20 left-72 h-[80vh] w-[50vw]' />


      </div>
    </div>
  )
}

export default Hero
