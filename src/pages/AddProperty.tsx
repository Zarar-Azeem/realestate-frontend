import React, { useState } from 'react'

export const AddProperty = () => {
    const [error, setError] = useState<string>('')
    return (
        <div className='w-4/5 mx-auto py-6'>
            <p className='text-xl font-medium py-6'>Add a new Property</p>
            <form  className='grid grid-cols-3 gap-4 '>
                <div className='input-field w-full  my-0'>
                    <label className='ml-1' htmlFor="name">Name</label>
                    <input className={error && "border-red-500"}  type="text" name='name'/>
                </div>
                <div className='input-field w-full  my-0'>
                    <label className='ml-1' htmlFor="location">Location</label>
                    <input className={error && "border-red-500"}  type="text" name='location'/>
                </div>
                <div className='input-field w-full  my-0'>
                    <label className='ml-1' htmlFor="price">Price</label>
                    <input className={error && "border-red-500"}  type="number" name='price'/>
                </div>
                <div className='input-field w-full my-0'>
                    <label className='ml-1' htmlFor="bedrooms">Bedrooms</label>
                    <input className={error && "border-red-500"}  type="number" name='bedrooms'/>
                </div>
                <div className='input-field w-full  my-0'>
                    <label className='ml-1' htmlFor="bathrooms">bathrooms</label>
                    <input className={error && "border-red-500"}  type="number" name='bathrooms'/>
                </div>
                <div className='input-field w-full  my-0'>
                    <label className='ml-1' htmlFor="size">Size</label>
                    <input className={error && "border-red-500"}  type="number" name='size'/>
                </div>
            </form>
    </div>
    )
}
