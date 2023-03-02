import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <section className='bg-gray-900 p-4'>
      <div className='max-w-5xl mx-auto flex justify-between items-center bg-gray-800 rounded-2xl p-4'>
        <div className='flex items-center gap-4'>
          <Image alt='Logo' src={'/favicon.png'} height={48} width={48} />
          <h1 className='text-2xl text-white font-semibold'>Sharded</h1>
        </div>
        <div className='flex gap-4 text-white'>
          <Link href={'https://github.com/sharded-chat'} className='text-lg hover:scale-105 duration-200'>GitHub</Link>
        </div>
      </div>
    </section>
  )
}

export default Header