import React, { useEffect, useState } from 'react'
import Card from './Card'
import LargeCard from './LargeCard'
import { Property } from '../types/PropertyTypes'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const PropertiesList  = () => {
  const [results, setResults] = useState<Property[] | undefined>([])
  const [count, setCount] = useState(0)

  const data = useSelector((state : RootState) => state.property.properties)


  useEffect(() =>{
    setResults(data)
    setCount(prev => prev +1)
    console.log(count)
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
        {results?.length != 0 ?
           results?.map((property: Property)=>
            <Card key={property._id} {...property} />) 
           : 
          <div>No Properties Found</div>
        }
        </div>
     </div>
  )
}

export default PropertiesList

