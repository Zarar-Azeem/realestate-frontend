import React from 'react'
import { useGetSavedPropertiesQuery } from '../slices/propertyApiSlice'
import LargeCard from './LargeCard'
import { Property } from '../types/PropertyTypes'
import Card from './Card'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const SavedProperties = () => {
  const { data : properties } = useGetSavedPropertiesQuery({})
  console.log(properties)
  return (
    <div className='flex flex-col gap-4'>
        <div className='sm:flex hidden flex-col gap-4'>
        {properties?.length != 0 ?
           properties?.map((property: Property)=>
            <LargeCard key={property._id} {...property} />) 
           : 
          <div>No  Saved Properties Found</div>
        }
        </div>
        <div className='sm:hidden flex flex-col gap-4'>
        {properties?.length != 0 ?
           properties?.map((property: Property)=>
            <Card key={property._id} {...property} />) 
           : 
          <div>No Properties Found</div>
        }
        </div>
     </div>
  )
}

export default SavedProperties