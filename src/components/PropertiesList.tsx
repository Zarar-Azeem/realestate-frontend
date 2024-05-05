import React from 'react'
import Card from './Card'
import LargeCard from './LargeCard'

const PropertiesList = () => {
  return (
    
    
    <div className='flex flex-col gap-4'>
        <div className='sm:flex hidden flex-col gap-4'>
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        </div>
        <div className='sm:hidden flex flex-col gap-4'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
     </div>
  )
}

export default PropertiesList

