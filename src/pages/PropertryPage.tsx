import React from 'react'
import Info from '../components/Info'
import Features from '../components/Features'
import { useParams } from 'react-router-dom'
import { useGetOnePropertyQuery } from '../slices/propertyApiSlice'
import { Property } from '../types/PropertyTypes'

export const PropertryPage = () => {

  const { id } = useParams()
  const { data  } = useGetOnePropertyQuery(id)

  return (
    <div className='property_page block sm:flex flex-col justify-between lg:flex-row py-6'>
        <div className='basis-3/5 lg:mr-4'>
            <Info {...data as Property}/>
        </div>
        <div className='flex-grow lg:ml-2'>
            <Features {...data as Property}/>
        </div>
    </div>
  )
}
