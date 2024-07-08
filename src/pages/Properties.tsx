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
    
    setSearchParams({
      location: location as string,
      maxPrice: maxPrice as string,
      minPrice: minPrice as string,
      bedrooms: bedrooms as string,
    })
    
    try {
      const res = await axios.get(
        `http://localhost:3000/api/property/search?location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedrooms=${bedrooms}`)
        dispatch(setProperties(res.data))
    } catch (error) {
        console.error(error)
    }
  };  

  return (
    <div className='md:grid grid-cols-5 flex flex-col w-full mx-auto'>
            <div className="col-span-3 mr-6 flex flex-col">
                <PropertiesSearch handleSubmit={handleSubmit}/>
                <PropertiesList/>
            </div>
          <div className='map_container w-full hidden md:block col-span-2 rounded-md'>
            <Map/>
          </div>
      </div>
    
  )
}

export default Properties


// <div className='bg-blue-500 py-16'>
    //     <div className='flex flex-col w-4/5 mx-auto'>
    //       <PropertiesSearch />
    //       <PropertiesList/>
    //     </div>
    // </div>