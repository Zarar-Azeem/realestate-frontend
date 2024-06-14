import React, { useState } from 'react'
import PropertiesSearch from '../components/PropertiesSearch'
import PropertiesList from '../components/PropertiesList'
import Map from '../components/Map'
import axios from 'axios'
import { Property } from '../types/PropertyTypes'

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([])

  const handleSubmit = async (e : React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const location = formData.get('location') || ''
    const minPrice = formData.get('minPrice') || 0
    const maxPrice = formData.get('maxPrice') || 1000000
    const bedrooms = formData.get('bedrooms') || ''
    
    try {
        const res = await axios.get(
          `http://localhost:3000/api/property/search?location=${location}&maxPrice=${maxPrice}&minPrice=${minPrice}&bedrooms=${bedrooms}`)
        setProperties(res.data)
        console.log(location , maxPrice )
    } catch (error) {
        
    }
};  

  return (
    <div className='md:grid grid-cols-5 flex flex-col w-full mx-auto'>
            <div className="col-span-3 mr-6 flex flex-col">
                <PropertiesSearch handleSubmit={handleSubmit}/>
                <PropertiesList properties={properties}/>
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