import React from 'react'
import Search from './Search'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col lg:grid grid-cols-3 gap-x-4 pt-4'>
    <div className='col-span-2 py-16'>
        <h1 className='text-4xl font-bold text-slate-700'>Property search made Easy</h1>
        <p className=' text-start py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa aspernatur alias necessitatibus sunt quam nemo, dolorum maiores, sint, nihil tempora delectus nulla esse recusandae labore commodi! Dolorem qui provident maiores rerum aspernatur assumenda?</p>
        <Search/>
        <div className="flex flex-col sm:grid grid-cols-3 mt-8">
          <div className="flex flex-col">
            <p className='text-2xl font-bold'>16</p>
            <p>Years of Experience</p>
          </div>
          <div className="flex flex-col">
            <p className='text-2xl font-bold'>15000+</p>
            <p>Properties Ready</p>
          </div>
          <div className="flex flex-col">
            <p className='text-2xl font-bold'>500,000+</p>
            <p>Users</p>
          </div>
          
        </div>
    </div>
    </div>
    </>
  )
} 

export default Hero