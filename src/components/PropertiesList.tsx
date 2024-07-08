import React, { useEffect, useState } from 'react'
import Card from './Card'
import LargeCard from './LargeCard'
import { Property } from '../types/PropertyTypes'
import axios from 'axios'

const PropertiesList  = ({properties} : any) => {
  const url = new URL(window.location.href)
  const [results, setResults] = useState<Property[] | undefined>([])
  const searchParams = new URLSearchParams(url.search);
  const location = searchParams.get('location') || '';
  const minPrice = searchParams.get('minPrice') || 0;
  const maxPrice = searchParams.get('maxPrice') || 1000000;
  const bedrooms = searchParams.get('bedrooms') || '';


  useEffect(() =>{
    const fetch = async()=>{
      const res = await axios.get(
        `http://localhost:3000/api/property/search?location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedrooms=${bedrooms}`)
      setResults(res.data)
    }
    fetch()
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

