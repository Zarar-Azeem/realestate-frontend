import React, { useState } from 'react'
import { useCreatePropertyMutation, useGetPropertiesQuery, useGetUserPropertiesQuery } from '../slices/propertyApiSlice'
import { CreateProperty } from '../types/PropertyTypes'
import { useNavigate } from 'react-router-dom'

export const AddProperty = () => {
    
    const [error, setError] = useState<string>('')
    const [type, setType] = useState<string>('sell')
    const [propertyType, setPropertyType] = useState<string>('house')

    const navigate = useNavigate()
    const [ createProperty , { error : err , isLoading } ] = useCreatePropertyMutation()
    const { refetch } = useGetPropertiesQuery({})

    const handleSubmit = async(e : React.FormEvent<EventTarget>) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        try {
            const res : CreateProperty = await createProperty(formData).unwrap()
            if(res.success){
                refetch()
                navigate('/profile')
                console.log(res)
            }
        } catch {
            setError("Catch" + err as string)
            console.log(err)
        }
    }

    return (
        <div className='w-4/5 mx-auto sm:flex block'>
            <form className='basis-3/5 flex flex-col py-6' encType='multipart/form-data' onSubmit={handleSubmit}>
            <p className='text-xl text-center font-medium py-6'>Add a new Property</p>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="name">Name</label>
                    <input className={error && "border-red-500"}  type="text" name='title'/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="location">Location</label>
                    <input className={error && "border-red-500"}  type="text" name='location'/>
                </div>
                <div className='input-field'>
                    <label className='ml-1' htmlFor="propertytype">Type</label>
                    <select className='rounded-lg border-slate-300 border py-1 px-2' onChange={e => setPropertyType(e.target.value)}  name="propertytype" id="propertytype">
                        <option value="house">House</option>
                        <option value="land">Land</option>
                        <option value="appartment">Appartment</option>
                    </select>
                </div>
                <div className='py-2 px-4 flex items-center gap-2'>
                    <div className='basis-1/5'>
                        <select className='rounded-lg border-slate-300 border py-1 px-2' onChange={e => setType(e.target.value)}  name="type" id="type">
                            <option value="sell">Sell</option>
                            <option value="rent">Rent</option>
                        </select>
                    </div>
                    <div className='basis-4/5 flex items-center gap-2'>
                        <label className='ml-1' htmlFor="price">Price</label>
                        <input className={`w-full ${error && "border-red-500"}`} placeholder={`${type == 'rent' ? 'Rent per month' : 'Value of property'}`} type="number" name='price'/>
                    </div>
                </div>
                {propertyType != 'land' && <><div className='input-field w-full'>
                    <label className='ml-1' htmlFor="bedrooms">Bedrooms</label>
                    <input className={error && "border-red-500"}  type="number" name='bedrooms'/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="bathrooms">Bathrooms</label>
                    <input className={error && "border-red-500"}  type="number" name='bathrooms'/>
                </div></>}
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="size">Size</label>
                    <input className={error && "border-red-500"}  type="number" name='size'/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="size">Body</label>
                    <textarea className={error && "border-red-500"}   name='body'/>
                </div>
                <div className='input-field w-full'>
                    <label htmlFor="images">Select Photos</label>
                    <input className='file-input rounded-lg outline-slate-200' multiple type="file" name="pics" id="images" />
                </div>
                {error && <span>{error}</span>}
                <div className='input-field py-4'>
                    <button className='button-cta w-full px-4  disabled:bg-slate-400' disabled={isLoading ? true : false} type='submit'>Post Property</button>
                </div>
            </form>
            <p></p>
    </div>
    )
}
