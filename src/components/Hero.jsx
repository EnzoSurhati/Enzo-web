import React from 'react'
import hero from '../assets/Hero.jpeg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi there, <br /> I'm En<span className='text-red-500'>zo</span></h1>
            <p className='md:text-2xl text-xl mb-4'>Software Web Developer</p>
            <p className='mb-4'>Full Stack Software Developer | JavaScript | HTML | CSS | PostgreSQL | Express | Node.js | React | Git | REST APIs | GitHub | SQL | Redux | Tailwind | Bootstrap | MongoDB </p>
            <button className='bg-black text-white px-3 py-2 w-max rounded-md'>Download Credentials</button>
          </div>
          <div className='md:w1/2 relative flex justify-center items-end'>
            <img src={hero} alt="" className='lg:h-[60vh] h-72 rounded-full'/>
            <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
            <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden' />
            <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden' />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-4 rounded-full">
        <img src={facebook} alt="" className='w-12 rounded-full'/>
        <img src={instagram} alt="" className='w-12 rounded-full'/>
        <img src={twitter} alt="" className='w-12 rounded-full'/>
        <img src={linkedin} alt="" className='w-12 rounded-full'/>
      </div>
    </section>
  )
}

export default Hero