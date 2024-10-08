import React, { useState } from 'react'
import Map from './Map'
import "leaflet/dist/leaflet.css"
import { Property } from '../types/PropertyTypes'
import { useGetUserQuery } from '../slices/userApiSlice'
import { useGetSavedPropertiesQuery, useSavePropertyMutation } from '../slices/propertyApiSlice'
import { RootState } from '../store'
import { useSelector } from 'react-redux'

const Features = ({_id ,description , userId}: Property) => {
    const { data : user } = useGetUserQuery(userId)
    const { refetch : ref } = useGetSavedPropertiesQuery({})
    const [ saveProperty ]  = useSavePropertyMutation()
    const properties = useSelector((state : RootState) => state.property.savedProperties)

    const savedFunc = () => {
        if(properties.some(post => post._id === _id)){
            return true
        }
        return false
        
    }

    const handleBookmark = async () => {
        try {
            const res = await saveProperty(_id)
            ref()
            console.log(res)
            } catch (error) {
                console.error('Failed to delete property:', error);
                
            }
        }

  return (
    <div className='flex flex-col sm:text text-sm '>
            <p className='text-[0.85rem] font-semibold pb-3  md:text-[1rem] '>Owner Info</p>
            <div className='flex flex-col gap-1 pl-4 '>
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email} </p>
                <p>Phone Number: {user?.number}</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold py-3 text-[0.85rem] md:text-[1rem]  '>Room Sizes</p>
                <div className='flex gap-8 pl-4 items-center'>
                    <p className='px-2'>{description?.size}sqm</p>
                    <div className='flex w-fit border-none rounded-sm items-center gap-2 px-2'>
                        <p><i className="px-2 fa-solid fa-bed"></i>{description?.bedrooms} Bedrooms</p>
                    </div>
                    <div className='flex w-fit border-none rounded-sm items-center gap-2 px-2'>
                        <p><i className="px-2 fa-solid fa-bath"></i>{description?.bathrooms} Bathrooms</p>
                    </div>
                </div>
            </div>
            <div className=' w-full h-full'>
                <p className='font-semibold py-3 text-[0.85rem] md:text-[1rem] '>Location</p>
                <div className='rounded-lg w-full h-[300px] bg-red-200'><Map /></div>
            </div>
            <div className='flex gap-4 justify-center w-full py-3'>
                <button className='button bg-slate-200 flex items-center'>
                    <i className="fa-regular fa-message mr-2"></i>Message the Owner</button>
                <button className='button bg-slate-200 flex items-center gap-2' onClick={handleBookmark}>
                    <i className= {savedFunc() ? `text-red-500 fa-solid fa-heart` : 'fa-regular fa-heart'}></i>{!savedFunc() ? 'Save the Property' : 'Property Saved'}</button>
            </div>
    </div>
  )
}

export default Features