import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
// @ts-ignore
import WAVES from 'vanta/dist/vanta.waves.min'

const Hero = () => {

  return (
    <section className='w-full bg-gray-900'>
      <div className='mx-auto py-24 container px-8 grid md:grid-cols-2 md:grid-rows-1 justify-center'>
        <h1 className='text-white text-center md:text-right text-2xl lg:text-4xl font-semibold self-center'>The ability to communicate is crucial, and having the freedom to do so is fundamental.</h1>
        <Image alt='Logo' src={'/logo.svg'} width={256} height={256} className='mx-auto scale-90 md:scale-110 lg:scale-125 xl:scale-150' />
      </div>
    </section>
  )
}

export default Hero