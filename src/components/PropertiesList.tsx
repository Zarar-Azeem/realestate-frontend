import React, { useEffect, useState } from 'react'
import Card from './Card'
import LargeCard from './LargeCard'
import { useGetPropertiesQuery } from '../slices/propertyApiSlice'
import { Property } from '../types/PropertyTypes'

const PropertiesList  = ({properties} : any) => {
  const [results, setResults] = useState<Property[] | undefined>([])
  const { data } = useGetPropertiesQuery({})

  useEffect(() =>{
    if(properties.length == 0 ){
      setResults(data)
    } else {
      setResults(properties)
    }
  },[properties])

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

