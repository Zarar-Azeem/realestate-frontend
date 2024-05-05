import React from 'react'
import Info from '../components/Info'
import Features from '../components/Features'

export const PropertryPage = () => {
  return (
    <div className='property_page block sm:flex flex-col justify-between lg:flex-row py-12'>
        <div className='basis-3/5 lg:mr-4 '>
            <Info />
        </div>
        <div className='flex-grow lg:ml-2'>
            <Features/>
        </div>
    </div>
  )
}
