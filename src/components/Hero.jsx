import React from 'react'
import hero from '../assets/Hero.jpeg'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className="text-7xl font-major text-gray-900">Welcome!<br /> I'm En<span className='text-red-500'>zo</span></h1>
            <p className="text-2xl font-major text-gray-900">Software Developer</p>
            <p className='mb-4 font-mono'>JavaScript | Liquid | HTML | CSS | PostgreSQL | Express | Node.js | React | Git | REST APIs | GitHub | Redux | Tailwind | Bootstrap </p>
            <a href="https://github.com/EnzoSurhati" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-3 py-2 w-max rounded-md font-mono">MyGit</a>
          </div>
          <div className='md:w1/2 relative flex justify-center items-end'>
            <img src={hero} alt="" className="lg:h-[70vh] h-96 rounded-full border-4 border-black-400 shadow-2xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero