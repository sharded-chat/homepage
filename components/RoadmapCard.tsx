import Image from 'next/image'
import React, { FC } from 'react'

const RoadmapCard: FC<{ date: string, image: string, title: string, description: string }> = ({ date, image, title, description }) => {
  return (
    <>
      <div className='mx-auto h-16 w-4 bg-gradient-to-t from-gray-700 to-gray-400'></div>
      <div className='max-w-5xl mx-8 lg:mx-auto rounded-2xl bg-gray-800 p-4 grid justify-items-center gap-4 md:grid-cols-[128px_auto] md:grid-rows-1'>
        <Image alt='Keyoog or something idk' src={image} height={128} width={128} className='rounded-xl' />
        <div className='w-full'>
          <h1 className='text-white text-2xl font-semibold flex justify-between items-center'>{title}<span className='text-gray-400 text-sm'>{date}</span></h1>
          <p className='text-white'>{description}</p>
        </div>
      </div>
      <div className='mx-auto h-16 w-4 bg-gradient-to-b from-gray-700 to-gray-400'></div>
    </>
  )
}

export default RoadmapCard