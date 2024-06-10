import React, { useEffect, useState } from 'react'
import Card from './Card'
import LargeCard from './LargeCard'
import { useGetPropertiesQuery } from '../slices/propertyApiSlice'
import { Property } from '../types/PropertyTypes'

const PropertiesList = () => {

  const { data } = useGetPropertiesQuery({})
  
  return (
    <div className='flex flex-col gap-4'>
        <div className='sm:flex hidden flex-col gap-4'>
        {data?.map((property)=>
            <LargeCard key={property._id} {...property} />
        )}
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

