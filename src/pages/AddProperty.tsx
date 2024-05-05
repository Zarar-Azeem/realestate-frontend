import React, { useState } from 'react'
import Map from '../components/Map'

export const AddProperty = () => {
    const [error, setError] = useState<string>('')
    return (
        <div className='w-4/5 mx-auto sm:flex block'>
            <form  className='basis-2/5 flex flex-col py-6 '>
            <p className='text-xl text-center font-medium py-6'>Add a new Property</p>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="name">Name</label>
                    <input className={error && "border-red-500"}  type="text" name='name'/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="location">Location</label>
                    <input className={error && "border-red-500"}  type="text" name='location'/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="price">Price</label>
                    <input className={error && "border-red-500"}  type="number" name='price'/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="bedrooms">Bedrooms</label>
                    <input className={error && "border-red-500"}  type="number" name='bedrooms'/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="bathrooms">Bathrooms</label>
                    <input className={error && "border-red-500"}  type="number" name='bathrooms'/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="size">Size</label>
                    <input className={error && "border-red-500"}  type="number" name='size'/>
                </div>
                <div className='input-field w-full'>
                    <label htmlFor="images">Select Photos</label>
                    <input className='file-input rounded-lg' type="file" name="images" id="images" />
                </div>
                <div className='input-field py-4'>
                    <button className='button-cta w-full px-4'>Post Property</button>
                </div>
            </form>
            <div className='map_container w-3/6 mx-auto hidden sm:inline-block'>
                <Map />
            </div>
    </div>
    )
}
