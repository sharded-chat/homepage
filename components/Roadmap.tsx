import React from 'react'
import RoadmapCard from './RoadmapCard'

const Roadmap = () => {
  return (
    <section className='bg-gray-900 w-full py-8'>
      <div className='mx-auto container'>
        <h1 className='py-8 text-4xl text-white text-center font-semibold'>Roadmap</h1>
        <div className='mx-auto h-16 w-4 bg-gradient-to-t from-gray-400 to-gray-900'></div>
        <RoadmapCard date='1/3/2023' image='/logo.svg' title='A new idea was born...' description='
          Imagine a chat application that is free, open-source, and prioritizes user privacy, while also providing comparable features to Discord.
        ' />
        <div className='mx-auto h-16 w-4 bg-gradient-to-b from-gray-400 to-gray-900'></div>
        <h1 className='py-8 text-4xl text-white text-center font-semibold'>And more to come...</h1>
      </div>
    </section>
  )
}

export default Roadmap