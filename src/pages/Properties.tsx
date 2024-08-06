import React, { useEffect, useState } from 'react'
import PropertiesSearch from '../components/PropertiesSearch'
import PropertiesList from '../components/PropertiesList'
import Map from '../components/Map'
import axios from 'axios'
import { Property } from '../types/PropertyTypes'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setProperties } from '../slices/propertySlice'

const Properties = () => {
  // const [properties, setProperties] = useState<Property[]>([])
  const dispatch = useDispatch()
  const url = new URL(window.location.href)

  const [searchParams, setSearchParams] = useSearchParams({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });
 

  const handleSubmit = async (e : React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const location = formData.get('location') || ''
    const minPrice = formData.get('minPrice') || 0
    const maxPrice = formData.get('maxPrice') || 1000000
    const bedrooms = formData.get('bedrooms') || ''
    const type = formData.get('type') || 'sell'
    const propertytype = formData.get('propertytype') || ''
    
    setSearchParams({
      location: location as string,
      maxPrice: maxPrice as string,
      minPrice: minPrice as string,
      bedrooms: bedrooms as string,
      type: type as string,
      propertytype: propertytype as string,
    })
    
    try {
      const res = await axios.get(
        `http://localhost:3000/api/property/search?type=${type}&propertytype=${propertytype}&location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedrooms=${bedrooms}`)
        dispatch(setProperties(res.data))
    } catch (error) {
        console.error(error)
    }
  };  

  return (
    <div className='md:grid grid-cols-8 flex flex-col w-full mx-auto'>
            <div className="search_container col-span-2 mr-6">
                <PropertiesSearch handleSubmit={handleSubmit}/>
            </div>
            <div className='w-full col-span-6 py-8'>
                  <PropertiesList/>
            </div>
      </div>
    
  )
}

export default Properties
