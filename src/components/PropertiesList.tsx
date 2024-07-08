import React, { useEffect, useState } from 'react'
import Card from './Card'
import LargeCard from './LargeCard'
import { Property } from '../types/PropertyTypes'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { setProperties } from '../slices/propertySlice'

const PropertiesList  = ({properties} : any) => {
  const [results, setResults] = useState<Property[] | undefined>([])
  const data = useSelector((state : RootState) => state.property.properties)


  useEffect(() =>{
    setResults(data)
    console.log('1')
  },[data])

  return (
    <div className='flex flex-col gap-4'>
        <div className='sm:flex hidden flex-col gap-4'>
        {results?.length != 0 ?
           results?.map((property: Property)=>
            <LargeCard key={property._id} {...property} />) 
           : 
          <div>No Properties Found</div>
        }
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

