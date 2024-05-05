import React, { useState } from 'react'
import Map from './Map'
import "leaflet/dist/leaflet.css"

const Features = () => {

    const [saved, setSaved] = useState<boolean>(true)

    const toggleSave = () => {
        setSaved(prev => !prev)
    }

  return (
    <div className='flex flex-col sm:text text-sm '>
            <p className='text-xl font-semibold pb-6 '>General</p>
            <div className='flex flex-col gap-2 pl-4'>
                <div>
                    <p className='text-[0.85rem] md:text-[1rem] font-semibold'>Utilities</p>
                    <p className='text-sm ml-2'>Renter is responsible</p>
                </div>
                <div>
                    <p className='text-[0.85rem] md:text-[1rem]  font-semibold'>Pet Policy</p>
                    <p className='text-sm ml-2'>Pets are Allowed</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold py-6 text-[0.85rem] md:text-[1rem]  '>Room Sizes</p>
                <div className='flex gap-8 pl-4 items-center'>
                    <p className='px-2'>80sqm</p>
                    <div className='flex w-fit border-none rounded-sm items-center gap-2 p-2'>
                        <p><i className="px-2 fa-solid fa-bed"></i>3 Bedrooms</p>
                    </div>
                    <div className='flex w-fit border-none rounded-sm items-center gap-2 p-2'>
                        <p><i className="px-2 fa-solid fa-bath"></i>2 Bathrooms</p>
                    </div>
                </div>
            </div>
            <div className=' w-full h-full'>
                <p className='font-semibold py-6 text-[0.85rem] md:text-[1rem] '>Location</p>
                <div className='rounded-lg w-full h-[300px] bg-red-200'><Map /></div>
            </div>
            <div className='flex gap-4 justify-center w-full py-6'>
                <button className='button bg-slate-200 flex items-center'>
                    <i className="fa-regular fa-message mr-2"></i>Message the Owner</button>
                <button className='button bg-slate-200 flex items-center' onClick={toggleSave}>
                    <i className={`${saved ? 'fa-solid text-red-500':'fa-regular'} fa-heart mr-2`}></i>{!saved ? 'Save the Property' : 'Property Saved'}</button>
            </div>
    </div>
  )
}

export default Features