import React from 'react'
import { useGetSavedPropertiesQuery } from '../slices/propertyApiSlice'
import LargeCard from './LargeCard'

const SavedProperties = () => {
  // const { data : properties } = useGetSavedPropertiesQuery({})
  // console.log(properties)
  return (
    <div>
        <div className='flex flex-col gap-4'>
          2
            {/* {properties?.map((property)=>
                <LargeCard key={property._id} {...property} />
            )} */}
        </div>
    </div>
  )
}

export default SavedProperties