import React, { useState } from 'react'
import Map from '../components/Map'
import { useCreatePropertyMutation, useGetPropertiesQuery, useGetUserPropertiesQuery } from '../slices/propertyApiSlice'
import { CreateProperty, Property } from '../types/PropertyTypes'
import { useNavigate } from 'react-router-dom'
import { capitalize } from '../utils'

export const AddProperty = () => {
    const [error, setError] = useState<string>('')
    const [files, setFiles] = useState([]);

    const handleFileChange = (e : any) => {
    }

    const navigate = useNavigate()
    const [ createProperty , { error : err} ] = useCreatePropertyMutation()
    const { refetch } = useGetUserPropertiesQuery({})
    const { refetch : ref } = useGetPropertiesQuery({})

    const handleSubmit = async(e : React.FormEvent<EventTarget>) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const title = formData.get('title') as string
        const location = capitalize(formData.get( 'location') as string)
        const price = formData.get( 'price')
        const bedrooms = formData.get('bedrooms')
        const bathrooms = formData.get('bathrooms')
        const size = formData.get('size')
        const body = formData.get('body')
        const pics  =  files
        try {
            console.log(pics)
            const res : CreateProperty = await createProperty({title, price,body, location,size,bedrooms,bathrooms}).unwrap()
            if(res.success){
                ref()
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
                    <label className='ml-1' htmlFor="size">Body</label>
                    <textarea className={error && "border-red-500"}   name='body'/>
                </div>
                <div className='input-field w-full'>
                    <label htmlFor="images">Select Photos</label>
                    <input className='file-input rounded-lg outline-slate-200' onChange={(e : any)=> { setFiles(e.target.files[0]) }} type="file" name="pics" id="images" />
                </div>
                {error && <span>{error}</span>}
                <div className='input-field py-4'>
                    <button className='button-cta w-full px-4' type='submit'>Post Property</button>
                </div>
            </form>
            <p></p>
    </div>
    )
}
