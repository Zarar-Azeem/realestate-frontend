import React from 'react'
import LargeCard from './LargeCard'
import { useGetUserPropertiesQuery } from '../slices/propertyApiSlice'

const MyProperties = () => {
    const { data : properties } = useGetUserPropertiesQuery({})

  return (
        <div className='flex flex-col gap-4'>
            {properties?.map((property)=>
                <LargeCard key={property._id} {...property} />
            )}
        </div>
    )

}

export default MyProperties